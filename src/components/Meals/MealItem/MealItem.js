import { useContext } from 'react'
import CartContext from '../../../context/cart-context'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = ({ name, description, price, id }) => {
  const { addItem } = useContext(CartContext)

  const addToCartHandler = (amount) => {
    // console.log(amount)
    addItem({
      id,
      name,
      amount,
      price,
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>${price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}

export default MealItem
