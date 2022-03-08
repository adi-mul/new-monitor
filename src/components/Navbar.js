import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import  styled from 'styled-components'
import { ButtonContainer } from './Button'
import './Navbar.css'
export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <Link to="/">
        <img src={'./n13.png'}
          alt="store" className='navbar-brand'/>
        </Link>
        <ul className="navbar-nav  align-items-center">
          <li className='nav-item ml-5v '>
            
              <Link to='/' className='nav-link'>
               <h1 className='nav__lg'>New Monitor Electronics</h1>
              </Link>
              
          </li>

        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className='mr-2'>
            <i className='fas fa-cart-plus '/>Cart
            </span>
          </ButtonContainer>
        </Link>

        
      </nav>
    )
  }
}


