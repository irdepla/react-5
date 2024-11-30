import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import axios from 'axios'

function App() {


  const [products, setproducts] = useState([])
  const [loader, setLoader] = useState(false)

  async function getProducts() {
    setLoader(true)
    const res = await axios.get("http://localhost:5000/products")
    setLoader(false)
    setproducts(res.data.data)
  }


  useEffect(() => {
    getProducts()
  }, []);

  return (
    <>
  {loader && (
    <div className="loader-wrapper">
      <div className="loader"></div>
    </div>
  )}
  <div className="container">
    <h1 className='main__title'>Products</h1>
    <div className="wrapper">
      {products.map((product) => (
        <Card 
          title={product.name} 
          img={product.image} 
          desc={product.description} 
          price={product.price} 
        />
      ))}
    </div>
  </div>
</>

  )
}

export default App;
