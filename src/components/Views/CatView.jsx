import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useStyles } from './CatView.styles'
import CatImage from '../common/CatImage'
import FavouriteButton from '../FavouriteButton'
import { getDataAPI } from '../../util/api'

const CatView = () => {
  const [catDetails, setCatDetails] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()
  const classes = useStyles()

  useEffect(() => {
    const abortController = new AbortController()
    // The reason I don't move this declaration out of the useEffect is because
    // it will have to be wrapped with useCallback and add it as a usEffect dependency.
    // But that way on mount/unmount the instance of the abortController inside the getAsyncCatDetails
    // will be different from the one called in useEffect's cleanup function.
    const getAsyncCatDetails= async abortController => {
      const response = await getDataAPI(`https://api.thecatapi.com/v1/images/${id}`, abortController)
      if (response instanceof Error) {
        // When component unmounts before the request completes
        if (response.name === 'AbortError') {
          return null
        }
        setError(response.message)
      } else {
        setCatDetails(response)
      }
      setIsPending(false)
    }

    getAsyncCatDetails(abortController)

    // abort the fetch request on unmount
    return () => {
      abortController.abort()
    }
  }, [id])

  if (isPending) {
    return <div>Loading...</div>
   }

   if (error) {
     return <div>{ error }</div>
   }

   const breeds = catDetails.breeds || []

  return (
    <div className={classes.catView}>
      <CatImage cat={catDetails} />
      <FavouriteButton catId={catDetails.id}/>
        {breeds.length > 0 &&
          <div className={classes.breedDetails}>
            <div className={classes.breedHeader}> Breed: </div>
            {breeds.map(breed => (
                <div className={classes.breedText} key={`${breed.id}`}>{breed.name}</div>
            ))}
          </div>
        }
    </div>
  )
}

export default CatView