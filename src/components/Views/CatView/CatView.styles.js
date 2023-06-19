import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  catView: {
    height: '50%',
    width: '50%',
    margin: 'auto',
  },
  breedDetails: {
    display: 'flex',
    justifyContent: 'center',
  },
  breedHeader: {
    color: '#f1356d',
    fontSize: 25,
    marginRight: 5
  },
  breedText: {
    fontSize: 25,
    fontWeight: 600,
  }
})