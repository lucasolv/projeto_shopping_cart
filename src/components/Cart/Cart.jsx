import AppContext from '../../context/AppContext'
import formatCurrency from '../../utils/formatCurrency'
import CartItem from '../CartItem/CartItem'
import './Cart.css'
import React, { useContext } from 'react'

const Cart = () => {

    const {cartItems, isCartVisible} = useContext(AppContext)

    const totalPrice = cartItems.reduce((acc, item)=> item.price + acc, 0)

  return (
    <section className={`cart ${isCartVisible && 'cart--active'}`}>
        <div className='cart-items'>
            {cartItems && cartItems.map((cartItem)=>(
                <CartItem key={cartItem.id} data={cartItem} />
            ))}
        </div>
        <div className='cart-resume'>{formatCurrency(totalPrice, "BRL")}</div>
        {/* {cartItems.length} */}
    </section>
  )
}

export default Cart