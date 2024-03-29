import React from 'react'
import { PRODUCTS } from '../../products'
import Card from '../card/Card'
import "./cart.scss"
const Cart = ({add,remove,cart,total,checkout}) => {
    var ctn=true
  return (
    <div className='cart'>
        <div className='products'>
        
            {PRODUCTS.map((product)=>{
                // console.log("incart",product.id,cart[product.id])
                if(cart[product.id]>0){
                    ctn=false
                    return(
                <Card add={add} remove={remove} cart={cart} product={product}/>
                    )
            }
        }
        
            )
    }
    {ctn?<h2>no items to display 😒</h2>:""}
        </div>
    
        <div className='total'>
            <div>
            <h2>Total</h2>
            <h2>₹{total()}</h2>
            <button onClick={checkout}>Checkout</button>
            </div>
        </div>

    </div>
  )
}

export default Cart