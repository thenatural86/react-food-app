import React from 'react'
import classes from './MealItem.module.css'

const MealItem = ({ name, description, price }) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div>${price.toFixed(2)}</div>
      </div>
      <div></div>
    </li>
  )
}

export default MealItem
