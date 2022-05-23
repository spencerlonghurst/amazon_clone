import React, { useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

function Payment() {
  const [{ basket, user}, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true)

  const handleSubmit = event => {
    // do all the fancy stripe stuff
  }

  const handleChange = event => {
    // Listen for changes inside of CardElement
    // Display any erros as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  }

  return (
    <div>
      <div className='payment_container'>
        <h1>
          Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
        </h1>

        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment_address'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Review items and delivery</h3>
          </div>
            <div className='payment_items'>
              {basket.map(item => {
                return <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}  
                />
              })}
            </div>
        </div>
        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment_details'>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment