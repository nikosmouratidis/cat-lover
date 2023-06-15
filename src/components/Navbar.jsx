import { Link } from 'react-router-dom'

import { useStyles } from './Navbar.styles'

const Navbar = () => {
  const classes = useStyles()

  return (
    <div className={classes.navbar}>
      <div className={classes.navbarHeader}>The Cat Lover</div>
      <div className={classes.navbarLinks}>
        <Link className={classes.navbarLinkHome} to='/'>Home</Link>
        <Link className={classes.navbarLinkFavourites} to='/favourites'>Favourites</Link>
      </div>
    </div>
  )
}

export default Navbar