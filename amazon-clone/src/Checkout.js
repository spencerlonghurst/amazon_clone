import React from "react"
import './Checkout.css'
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct"
import { useStateValue } from "./StateProvider"

function Checkout() {
  const [{ basket }] = useStateValue()
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
        className="checkout_ad"
        src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
        alt='advertisment'
        />
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>

            <CheckoutProduct
              id={23423}
              title='some erhre he rghe  he he heherjerhg ehvje'
              image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._ACSY400_.jpg'
              price={19.99}
              rating={5}
            />

            <CheckoutProduct
              id={23423}
              title='some erhre he rghe  he he heherjerhg ehvje'
              image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._ACSY400_.jpg'
              price={19.99}
              rating={5}
            />

            <CheckoutProduct
              id={23423}
              title='some erhre he rghe  he he heherjerhg ehvje'
              image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._ACSY400_.jpg'
              price={19.99}
              rating={5}
            />




          {basket.map(item => {
            return <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          })}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}


        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout