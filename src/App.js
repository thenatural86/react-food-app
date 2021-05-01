import { useState } from 'react'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import CartProvider from './context/CartProvider'

function App() {
  const [cartIsShown, setCartIsShown] = useState(true)

  const toggleCart = () => {
    setCartIsShown(!cartIsShown)
  }

  return (
    <CartProvider>
      {!cartIsShown && <Cart cartIsShown toggleCart={toggleCart} />}
      <Header toggleCart={toggleCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
