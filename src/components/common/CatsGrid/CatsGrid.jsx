import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { useStyles } from './CatsGrid.styles'
import useFetch from '../../../hooks/useFetch'
import CatImage from '../CatImage/CatImage'
import { SERVICE_API } from '../../../constants'

const CatsGrid = ({ variant }) => {
  const isFavourites = variant === 'favourites'
  const url = isFavourites ? `${SERVICE_API}/favourites` : `${SERVICE_API}/images/search/?limit=10`
  const { data = [], isPending, error} = useFetch(url)

  const classes = useStyles()

  if (isPending) {
   return <div data-testid='loading'>Loading...</div>
  }

  if (error) {
    return <div data-testid='error'>{ error }</div>
  }

  if (isFavourites && data.length === 0) {
    return  <div data-testid='no-favourites'>You have no favourites cats...</div>
  }

  const cats = data.map(cat => isFavourites ? cat.image : cat)

  return (
    <div className={classes.gridContainer}>
      {cats.map(cat => (
          <Link
            to={`/cat/${cat.id}`}
            key={`${cat.id}-link`}
          >
            <CatImage catId={cat.id} imgSrc={cat.url} />
          </Link>
      ))}
    </div>
  )
}

CatsGrid.propTypes = {
  variant: PropTypes.oneOf(['home', 'favourites'])
}

CatsGrid.defaultProps = {
  variant: 'home'
};

export default CatsGrid