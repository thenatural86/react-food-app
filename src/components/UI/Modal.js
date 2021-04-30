import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = ({ toggleCart }) => {
  return <div className={classes.backdrop} onClick={toggleCart}></div>
}
const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  )
}

const Modal = ({ toggleCart, children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop toggleCart={toggleCart} />,
        document.getElementById('overlays')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById('overlays')
      )}
    </>
  )
}

export default Modal
