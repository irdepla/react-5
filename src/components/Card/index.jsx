import './index.css';
import { useState } from 'react'
import React from "react";

function Card({title, img, desc, price}) {

  const [desc1, setDesc] = useState(false)


  return (
      <div className="card">
        <img className='card__img' src={img} alt="" />
        <p className='card__title'>{title}</p>
        <p className='desc__container'>
        {desc1 
          ? desc 
          : `${desc.slice(0, 50)}...`}
<button onClick={ () => setDesc(!desc1)} 
        className="toggle-button">
          {desc1 ? "Less" : "More"}
        </button>
        </p>
        <p className='product__price'>${price}</p>
      </div>
  );
}

export default Card;


