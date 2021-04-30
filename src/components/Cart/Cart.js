import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const Cart = ({ cartIsShown, toggleCart }) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  )

  if (cartIsShown) {
    return (
      <Modal>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={toggleCart}>
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </Modal>
    )
  }
}

export default Cart
