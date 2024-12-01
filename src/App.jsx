import { useState, useEffect } from "react";
import "./App.css";
import MediaCard from "./components/MediaCard";
import axios from "axios";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveAppBar from "./components/Navbar";
import Media from "./components/Skeleton";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [products, setproducts] = useState([]);
  const [loader, setLoader] = useState(false);

  async function getProducts() {
    setLoader(true);
    const res = await axios.get("http://localhost:5000/products");
    setLoader(false);
    setproducts(res.data.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ResponsiveAppBar />
        <div className="main__wrapper">
        {loader && <Media />}
        <div className="container">
          <h1 className="main__title">Products</h1>
          <div className="wrapper">
            {products.map((product) => (
              <MediaCard
                key={product.id}
                title={product.name}
                img={product.image}
                desc={product.description}
                price={product.price}
              />
            ))}
          </div>
        </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
