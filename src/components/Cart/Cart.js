import { useContext } from 'react'
import CartContext from '../../context/cart-context'
import Modal from '../UI/Modal'

import CartItem from './CartItem'
import classes from './Cart.module.css'

const Cart = ({ cartIsShown, toggleCart }) => {
  let { items, totalAmount, addItem, removeItem } = useContext(CartContext)

  totalAmount = totalAmount.toFixed(2)
  const hasItems = items.length > 0

  const cartItemRemove = (id) => {
    removeItem(id)
  }
  const cartItemAdd = (item) => {
    addItem({ ...item, amount: 1 })
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemove.bind(null, item.id)}
          onAdd={cartItemAdd.bind(null, item)}
        />
      ))}
    </ul>
  )

  if (cartIsShown) {
    return (
      <Modal toggleCart={toggleCart}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>${totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={toggleCart}>
            Close
          </button>
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </Modal>
    )
  }
}

export default Cart
