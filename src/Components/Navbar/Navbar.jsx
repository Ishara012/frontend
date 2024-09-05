import React, { useContext, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const[menu,setMenu] = useState('shop');
    const{getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>

      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Blizz VIBES</p>
      </div>

      <ul className="nav-menu">
        <li className={menu==="shop"?'active':'menuitem'} onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link></li>
        <li className={menu==="mens"?'active':'menuitem'} onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link></li>
        <li className={menu==="womens"?'active':'menuitem'} onClick={()=>{setMenu("womens")}}><Link to='/womens'>Women</Link></li>
        <li className={menu==="kids"?'active':'menuitem'} onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link></li>

      </ul>
      
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar

 