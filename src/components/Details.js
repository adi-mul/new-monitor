import React, { Component } from 'react';
import { ProductConsumer } from './Components';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value =>{
          const{id,company,img,info, price, title,inCart
          }=value.detailProduct;
          return(
            <div className='container py-5'>
              {/*title*/}
              <div className='row'>
                <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                  <h1>{title}</h1>
                </div>
              </div>
              {/*end title*/}
              {/* product info*/ }
              <div className='row'>
                <div className='col-10 mx-auto col-md-6 my-3 text-capatlize'>
                  <img src={img}  className='img-fluid' alt=''/>
                </div>
                <div className='col-10 mx-auto col-md-6 my-3 text-capatlize'>
                  <h2>Model : {title}</h2>
                  <h6 className='text-title text-uppercase text-muted mt-3 mb-2'>
                    made by :<span className='text-uppercase'>
                      {company}
                    </span>
                    </h6>
                    <h5 className='text-blue'>
                      <strong>
                        price: <span>$</span>
                        {price}
                      </strong>
                    </h5>
                    <p className='text-capitalize font-weigth-bold mt-3 mb-0'> Some info about product: </p>
                    <p className='text-muted lead'>
                      {info}
                    </p>
                    {/*Buttons*/}
                    <div>
                    
                    <Link to='/'>
                      <ButtonContainer>
                        back to product
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer disabled={inCart?true:false}
                    onClick={()=>{
                      value.addToCart(id);
                    }}
                    >
                      {inCart ? 'inCart' :'Add to Cart'}
                    </ButtonContainer>
                    
                    </div>
                </div>

              </div>

            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
