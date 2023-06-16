import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  catView: {
    height: '50%',
    width: '50%',
    margin: 'auto',
  },
  breedName: {
    color: '#f1356d',
    textDecoration: 'underline',
    fontSize: 25,
    marginBottom: 5
  },
  breedDescription: {
    lineHeight: '20px',
    marginBottom: 10,
    textAlign: 'start',
  },
})