import React from 'react'

const ProductCard = ({data, key}) => {
    console.log("data", data);
    console.log("key", key);
  return (
    <div className='outerContainer'>
        <div className='innerContainer'>
        <img src={data.category.image}></img>
        <p>{data.category.name}</p>
        <p>{data.description}</p>
        <span>{data.price}</span>
        </div>
    </div>
  )
}

export default ProductCard