import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {

  const [cartProducts, setCartProducts] = useState([]);


  useEffect(() => {
    const data = localStorage.getItem('Cart');

    console.log(JSON.parse(data));
    setCartProducts(JSON.parse(data));
  }, [])

  const RemoveProduct = (id) => {
    const newProductList = cartProducts.filter((item) => item.id != id);
    setCartProducts(newProductList);
    localStorage.setItem('Cart',JSON.stringify(newProductList) );
  }

  if (!cartProducts) {
    return <h1>There is No Product in Cart...</h1>
  }
  return (
    <div>

      <h1>
        <Link to='/'>Product</Link>
      </h1>

      <div className='Product-Container'>
        {
          cartProducts.map((data, _) => (
            <div key={data.id} className='product-Box'>
              <img src={data?.thumbnail} alt={data?.title} />
              <h3>{data?.title}</h3>
              <div>
                <button>💸Checkout</button>
                <button onClick={() => RemoveProduct(data.id)}>Remove It</button>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Cart;