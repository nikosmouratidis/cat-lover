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
    zIndex: 10,
  },
  modal: {
    maxWidth: '60%',
    maxHeight: '80%',
    minWidth: '20%',
    minHeight: '20%',
    backgroundColor: 'white',
    borderRadius: 5,
    overflow: 'auto',
    padding: 15,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 25,
    right: 25,
    backgroundColor: '#f1356d',
    border: '0',
    padding: [7, 10],
    cursor: 'pointer',
    borderRadius: 17,
    color: 'white'
  },
  modalContent: {

  }
})