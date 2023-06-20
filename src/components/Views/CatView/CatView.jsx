import { useParams } from 'react-router-dom'

import { useStyles } from './CatView.styles'
import CatImage from '../../common/CatImage/CatImage'
import FavouriteButton from '../../FavouriteButton/FavouriteButton'
import useFetch from '../../../hooks/useFetch'
import { SERVICE_API } from '../../../constants'

const CatView = () => {
  const { id } = useParams()
  const classes = useStyles()

  const { data: catDetails, isPending, error} = useFetch(`${SERVICE_API}/images/${id}`)

  if (isPending) {
    return <div data-testid='loading'>Loading...</div>
   }

   if (error) {
     return <div data-testid='error'>{ error }</div>
   }

   const breeds = catDetails.breeds || []

  return (
    <div className={classes.catView}>
      <CatImage catId={catDetails.id} imgSrc={catDetails.url} />
      <FavouriteButton catId={catDetails.id} />
        {breeds.length > 0 &&
          <div className={classes.breedDetails}>
            <div className={classes.breedHeader}> Breed: </div>
            {breeds.map(breed => (
                <div
                  className={classes.breedText}
                  key={`${breed.id}`}
                  data-testid={`breed-${breed.id}`}
                >
                  {breed.name}
                </div>
            ))}
          </div>
        }
    </div>
  )
}

export default CatView