import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <div className='checkoutProduct'>
      <img
        className='checkoutProduct_image'
        src={image}
        alt='Checkout Product'
      />

      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct_price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct_rating'>
          {Array(rating).fill().map(() => {
            return <p>⭐️</p>
          })}
        </div>
        <button>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct