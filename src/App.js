import { useState } from 'react'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const toggleCart = () => {
    setCartIsShown(!cartIsShown)
  }

  return (
    <>
      {!cartIsShown && <Cart cartIsShown toggleCart={toggleCart} />}
      <Header toggleCart={toggleCart} />
      <main>
        <Meals />
      </main>
    </>
  )
}

export default App
