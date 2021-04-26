import React from 'react'
import meals from '../../assets/meals.jpeg'

import classes from './Header.module.css'

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Fancy Foods</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={meals} alt='food' />
      </div>
    </>
  )
}

export default Header
