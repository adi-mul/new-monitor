import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import './Navbar.css'
export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <img className='navbar_im' src={"./n13.png"} alt="" />
        <nav className='navbar_1'>
          <ul className='navbar_link'>
          <Link to='/' className='nav-link'>
            <li><a href=' '>New Monitor Electronics </a></li>
          </Link>
          </ul>
          
        </nav>
        <Link to="/cart" >
        <a href=' '><button className='navbar__btn'>Cart</button></a>
        </Link>
      </div>
    )
  }
}


