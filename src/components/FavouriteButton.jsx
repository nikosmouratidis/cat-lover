import { useState, useEffect, memo } from 'react'
import PropTypes from 'prop-types'

import { useStyles } from './FavouriteButton.styles'
import { addFavouriteAPI, deleteFavouriteAPI, getFavourites } from '../util/api'

const FavouriteButton = ({ catId }) => {
  const [favourite, setFavourite] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  const classes = useStyles()

  useEffect(() => {
    const abortGetFavourites = new AbortController()

    const getAsyncFavourites = async abortGetFavourites => {
      const response = await getFavourites(abortGetFavourites)
      if (response instanceof Error) {
        // When component unmounts before the request completes
        if (response.name === 'AbortError') {
          return null
        }
        setError(response.message)
      } else {
        const favourite = response.find(favourite => favourite.image_id === catId)
        favourite && setFavourite(favourite)
      }
      setIsPending(false)
    }
    getAsyncFavourites(abortGetFavourites)

    // abort the fetch request on unmount
    return () => abortGetFavourites.abort()
  }, [catId])

  const handleFavourite = async () => {
    setIsPending(true)
    if (favourite) {
      const response = await deleteFavouriteAPI(favourite.id)

      if (response instanceof Error) {
        setError(response.message)
      } else if (response.message === 'SUCCESS') {
        setFavourite(null)
      } else {
        setError(new Error('Service could not delete from favourite'))
      }
    } else {
        const response = await addFavouriteAPI(catId)

        if (response instanceof Error) {
          setError(response.message)
        } else if (response.message === 'SUCCESS') {
          setFavourite(response)
        } else {
          setError(new Error('Service could not add to favourite'))
        }
    }
    setIsPending(false)
   }

   if (error) {
    return null
   }

   const favButtonMsg = isPending
    ? 'Loading'
    : favourite
      ? 'Remove from favourites'
      : 'Add as a favourite'

  return (
    <button
        className={classes.favouriteButton}
        onClick={handleFavourite}
        disabled={isPending}
        data-testid='favourite-button'
      >
        { favButtonMsg }
      </button>
  )
}

FavouriteButton.propTypes = {
  catId: PropTypes.string
}

export default memo(FavouriteButton)