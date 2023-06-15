import { Link } from 'react-router-dom'

import { useStyles } from './HomeView.styles'
import useFetch from '../../hooks/useFetch'
import CatImage from '../common/CatImage'

const HomeView = () => {
  const { data: cats, isPending, error} = useFetch('https://api.thecatapi.com/v1/images/search/?limit=10')

  const classes = useStyles()

  if (isPending) {
   return <div>Loading...</div>
  }

  if (error) {
    return <div>{ error }</div>
  }
  return (
    <div className={classes.gridContainer}>
      {cats.map(cat => (
        <Link
          to={`/cat/${cat.id}`}
          key={`${cat.id}-link`}
        >
          <CatImage cat={cat} />
        </Link>
      ))}
    </div>
  )
}

export default HomeView