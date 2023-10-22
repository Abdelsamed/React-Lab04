import React, { useState } from 'react';
import './style.css';
import './style copy.css';
import Task4 from './Task4';
import './ProductData'
import { products } from './ProductData';


function Task01() {
  const [arr, setArr] = useState([products]);
  const setValue=()=>{
    setArr(...arr,{
        id:arr.id,
        name:arr.name,
        img:arr.img,
        price:arr.price,
        description:arr.description,
        category:arr.categorye,
    })

  }

  return (
    <React.Fragment className='parparent'>
      {products.map((arr) => (
        <div key={arr.id} className='bigChild'>
          <p>{arr.name}</p>
          <img className='imgs' src={arr.img}/>
          <p>{arr.price}</p>
          <p className='price'>{arr.description.slice(0,35)}</p>
          <p className='cat'>{arr.category}</p>
          <Task4/>
        </div>
      ))}
    </React.Fragment>
  );
}

export default Task01;