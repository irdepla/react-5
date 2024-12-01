import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';


export default function Media(props) {
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", 
          gap: 10, 
          marginTop: 2,
        }}
      >
        {Array.from(new Array(9)).map((item, index) => (
          <Box key={index} sx={{ width: 340, margin: "auto" }}>
            <Skeleton variant="rectangular" width={340} height={118} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Box>
        ))}
      </Box>
    );
  }
  