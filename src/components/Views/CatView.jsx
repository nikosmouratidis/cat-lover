import { useParams } from 'react-router-dom'

import { useStyles } from './CatView.styles'
import useFetch from '../../hooks/useFetch'
import CatImage from '../common/CatImage'
import FavouriteButton from '../FavouriteButton'

const CatView = () => {
  const { id } = useParams()
  const { data: cat, isPending, error} = useFetch(`https://api.thecatapi.com/v1/images/${id}`)

  const classes = useStyles()

  if (isPending) {
    return <div>Loading...</div>
   }

   if (error) {
     return <div>{ error }</div>
   }

   const breeds = cat.breeds || []

  return (
    <div className={classes.catView}>
      <CatImage cat={cat} />
      <FavouriteButton catId={cat.id}/>
      {breeds.map(breed => (
        <div key={`${breed.id}`}>
          <div className={classes.breedName}> Breed: {breed.name}</div>
          <div className={classes.breedDescription}> <strong>Description:</strong> {breed.description}</div>
        </div>
      ))
      }
    </div>
  )
}

export default CatView