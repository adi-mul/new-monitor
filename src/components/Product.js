import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from './Components'
import styled from 'styled-components'
import PropTypes from "prop-types"
import "./Product.css"

export default class Product extends Component {
  render() {

      const {id ,title,img,price,inCart} =this.props.product;

    return (
    
      <ProductWrapper > 
      
      <div className='card'>
        <ProductConsumer>
         {value =>(
           <div className='img-contain'  onClick={()=>value.handleDetail(id)}>

           <Link to={"/details"}>
             <img className='card-img' src={img} alt="product"/>
           </Link>
               <button className='cart-btn' disabled={inCart ? true: false} 
               onClick={()=>{value.addToCart(id);
              }}
               >
             
                 {inCart?(<p  disabled>In Cart</p>):(<i className='fas fa-cart-plus'/>)}

               </button>
           
         </div>
        
         )}

          
        </ProductConsumer>
          {/*footer part*/}


          <div className='card-footer d-flex justify-content-between'>
                <p className='align-self-center mb-0'>
                  {title}
                </p>
                <h5 className='text-blue font-italic mb-0'>
                    <span className='mr-1'>
                      $
                    </span>{price}
                </h5>
          </div>
      </div>
      </ProductWrapper>
     
    )
  }
}
 /*part of the code is for getting the datatype erro in the data.js */
Product.propTypes={
 product:PropTypes.shape({
   id:PropTypes.number,
   img:PropTypes.string,
   title:PropTypes.string,
   price:PropTypes.number,
   inCart:PropTypes.bool,
 }
 )
}



const ProductWrapper =styled.div`
.card{
  border-color:transparent;
  transition: all 0.3s linear;
}
.card-footer{
  background: transparent;
  border-top:transparent;
  transition :all 0.3s linear;
}
&:hover{
    .card{
      border:0.3rem solid rgba(0,0,0,0.2);
      border-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
  .card-footer{
    background:rgba(247,247,247);
  }
}
  .img-container{
    position:relative;
    overflow:hidden;
  }
  .card-img-top{
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top{
    tarnsform:scale(1.2);
  }
  .cart-btn {
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    border:none;
    color:#F95700ff;
    font-size:2rem;
    background-color:(--mainWhite);
    border-radius: 0.5rem 0 0 0;
    transform:translate(100%,100%);
    transition :all 0.5s linear;
  }
  .img-container:hover .cart-btn{
    transform:translate(0,0);
    
  }
  .cart-btn:hover{
    background-color:#A7D2CB;
    cursor:pointer;
  }


`;

