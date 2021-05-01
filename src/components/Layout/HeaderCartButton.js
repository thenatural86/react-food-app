import { useContext } from 'react'
import CartContext from '../../context/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = ({ toggleCart }) => {
  const { items } = useContext(CartContext)

  const numberOfItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0)

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  )
}

export default HeaderCartButton
