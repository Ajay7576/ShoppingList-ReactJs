import React from 'react'

function CartItems(props) {
    debugger
    const {cartItems}=props;
    console.log(cartItems);
  return (
    <div className="container">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length===0 && <div> Cart is empty</div>}

        {cartItems.map((item=>{
            <div
                key={item.id} className="row">
                    <div className="col-2">
                        {item.name}
                 </div>
            </div>
        }))}
      </div>
    </div>
  )
}

export default CartItems
