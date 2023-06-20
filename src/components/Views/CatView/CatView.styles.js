import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  catView: {
    height: '100%',
    width: '100%',
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