
import React from 'react'

const CartTotal = (props) => {

  return (
    <div className="Total mt-2">
        <h4>Total: $ {props.cartItemsList.reduce((total, item) => {
          
          return ((parseInt(total) + (item.product.priceInCents * item.quantity)/100).toFixed(2))
        },0)}
        </h4>
   </div>
  )
}

export default CartTotal;
