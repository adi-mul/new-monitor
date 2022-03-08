import React, { Component } from 'react'
import Product from "./Product"
import './ProductList.css'
import Title from './Title'
import { ProductConsumer } from './Components'

export default class Product_list extends Component {
   

  render() {
    return (
      //<Product/>
      <React.Fragment>
        <div className='page1'>
            <div className='page1__main'>
                <h1 className='page1__head'>New Monitor Electronics</h1>
                
                <p className='page1__para'>
                We are a leading Manufacturer of Power Control Switch,
                HT Control Switch, LT Control Switch, Automatic Control 
                Switch, Touch Remote Switch and Wireless Module Remote
                Switch from Ahmednagar, India.
                </p>
                <img className='page1__img' src={"./pcb3.png"} alt=''/>
            </div>
        </div>
        {/* Slide 2*/}
        <div className='page2'>
            <div className='page2__container'>
              <div className='page2__cont'>
              <h1 className='page2__head' >Company Vision</h1>
              <p className='page2__para'>
                Company is focused on developing industrial products that will benefit the socitey.
                Company mainly focused on developing agro related products that will make the 
                work of the farmer easy 
                The Company also develop systems and products on the user requirment.New Mart Electronics
                focuses on developing world class product and give the best services. 

              </p>
              </div>
              <img className='page2__img' src={"./robot3.png"} alt=''/>
            </div>


        </div>
       

          {/* Slide 3 */}
      <div className='productlist__ba'>
        <div className='productlist__main'>
            <div className='productlist__container'>
              <Title name='Product' title='Store' />
              <div className='row'>
                <ProductConsumer>
                  {(value)=>{
                    return value.products.map( product =>{
                      return<Product
                      key={product.id}
                      product={product}

                      />
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
        </div>
      </div>
        <div className='page4'>
          <h2 className='page4__h'>Contact : 9423701609</h2>
          <h2 className='page4__h1'>Email:mulikadi001@gmail.com </h2>
        </div>
      </React.Fragment>
    )
  }
}
