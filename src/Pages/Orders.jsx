import React, { useContext } from 'react'
import './CSS/Orders.css'
import { ShopContext } from '../Context/ShopContext'

const Orders = () => {

    const {getTotalCartAmount} = useContext(ShopContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>

        {/* <div className="multi-fields">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name'/>
        </div> */}

         <input type="text" placeholder='Full Name'/>   

        <input type="email" placeholder='Email'/>

        <input type="text" placeholder='Address' />

        {/* <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State'/>
        </div> */}

        {/* <div className="multi-fields">
            <input type="text" placeholder='Zip code' />
            <input type="text" placeholder='Country'/>
        </div> */}

        <input type="text" placeholder='Phone' />
      </div>

      <div className="place-order-right">
      <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>Rs.{getTotalCartAmount}</p>
                </div>
                <hr />
                <div className='cartitems-total-item'>
                    <p>Shippong Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className='cartitems-total-item'>
                    <h3>Total</h3>
                    <h3>Rs.{getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Orders
