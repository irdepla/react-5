import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function MediaCard({title, img, desc, price}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {desc}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'text.primary' }}>
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><AddShoppingCartIcon/></Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
