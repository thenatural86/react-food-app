import React from 'react'
import meals from '../../assets/meals.jpeg'

import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Fancy Foods</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={meals} alt='food' />
      </div>
    </>
  )
}

export default Header
