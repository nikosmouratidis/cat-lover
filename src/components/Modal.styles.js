import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  modalWrapper:{
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
  },
  modal: {
    maxWidth: '60%',
    maxHeight: '80%',
    backgroundColor: 'white',
    borderRadius: 5,
    overflow: 'auto',
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 10,
    background: '#fff',
    border: '1px solid #000',
    boxShadow: '0px 0px 10px 1px #737373',
    padding: [7, 10],
    cursor: 'pointer',
    borderRadius: 17,
  },
  modalContent: {

  }
})