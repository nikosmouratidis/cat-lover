import { createUseStyles } from 'react-jss'

const commonStyles = {
  marginLeft: 16,
  textDecoration: 'none',
  padding: 10,
}

export const useStyles = createUseStyles({
  navbar: {
    padding: [20, 0],
    display: 'flex',
    alignItems: 'center',
    maxWidth: '80%',
    margin: [0, 'auto'],
    borderBottom: [1, 'solid', '#f2f2f2']
  },
  navbarHeader: {
    color: '#f1356d',
    fontSize: 25,
    textDecoration: 'none',
  },
  navbarLinks: {
    marginLeft: 'auto'
  },
  navbarLinkHome: {
    ...commonStyles,

    '&:hover': {
      color: '#f1356d',
    },
  },
  navbarLinkFavourites: {
    ...commonStyles,
    color: 'white',
    backgroundColor: '#f1356d',
    borderRadius: 8
  },
})