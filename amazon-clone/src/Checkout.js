import React from "react"
import './Checkout.css'
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct"
import { useStateValue } from "./StateProvider"

function Checkout() {
  const [{ basket, user }] = useStateValue()
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
        className="checkout_ad"
        src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
        alt='advertisment'
        />
        <div>
          <h3>Hello, {user?.email.split('@')[0]}</h3>
          <h2 className="checkout_title">Your Shopping Basket</h2>

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
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout