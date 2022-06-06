import React, { useEffect, useState } from "react";

const Product = () => {
  // Note: this id should come from api
  const [product, setProduct]= useState([])

  useEffect(() => {

    
           
          fetch(`http://localhost:8080/products`)
          .then((res) => res.json())
          .then((data)=> {
             setProduct(data);
            //  console.log(data);
          })
  },[])

    const [count, setCount]= useState(0)
  return (
    <div >
      {
        product.map(({id,name,description}) => (
          <div>
               <div data-cy={id}>
                <h3 data-cy="product-name">{name}</h3>
               <h6 data-cy="product-description">{description}</h6>
               <button data-cy="product-add-item-to-cart-button">Add To cart</button>
              <div>
               <button data-cy="product-increment-cart-item-count-button" onClick={() => setCount(count+1)}>+</button>
               <span data-cy="product-count">
                 {
                    count
                  }
                </span>
                <button data-cy="product-decrement-cart-item-count-button" onClick={() => 
                 {
                   if(count>0)
                    setCount(count-1)}
                 }
                  >-</button>
                <button data-cy="product-remove-cart-item-button">Remove</button>
              </div>
               </div>
          </div>
                
                  
                  
                ))
              }
    </div>
    
  );
};

export default Product;
