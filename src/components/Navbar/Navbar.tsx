import React from 'react'
import { Link } from 'react-router-dom'

import { useStyles } from './Navbar.styles'

const Navbar: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.navbar}>
      <Link className={classes.navbarHeader} to='/'>The Cat Lover</Link>
      <div className={classes.navbarLinks}>
        <Link className={classes.navbarLinkHome} to='/'>Home</Link>
        <Link className={classes.navbarLinkFavourites} to='/favourites'>Favourites</Link>
      </div>
    </div>
  )
}

export default Navbar