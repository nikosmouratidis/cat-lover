import { useNavigate } from 'react-router-dom'
import { useStyles } from './Modal.styles'
import { Modal as ModalOverlay } from 'react-overlays'

const Modal = ({ children }) => {
  const navigate = useNavigate()
  const classes = useStyles()

  return (
    // <ModalOverlay>
    //   <button onClick={() => navigate(-1)} className={classes.closeButton}> X </button>
    //   {children}
    // </ModalOverlay>
    <div className={classes.modalWrapper}>
      <div className={classes.modal}>
        <button onClick={() => navigate(-1)} className={classes.closeButton}> X </button>
        <div className={classes.modalContent}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal