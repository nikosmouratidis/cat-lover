import { useState, useEffect, memo } from 'react'
import PropTypes from 'prop-types'

import { useStyles } from './FavouriteButton.styles'
import { addFavouriteAPI, deleteFavouriteAPI, getFavouriteAPI } from '../../util/api'

const FavouriteButton = ({ catId }) => {
  const [favourite, setFavourite] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  const classes = useStyles()

    // TODO: Revisit this useEffect if it can be moved as a custom hook
    // or even move the favourite fetch to the parent
  useEffect(() => {
    const abortGetFavourites = new AbortController()
    // This function declaration can not be moved outside
    // because it will be a useEffect dependency and as that
    // it will need to be wrapped with useCallback. The problem is
    // that wrapped with useCallback the instance of the abortController
    // will be different from the one inside useEffect
    const getAsyncFavourites = async abortGetFavourites => {
      const response = await getFavouriteAPI(catId, abortGetFavourites)
      if (response instanceof Error) {
        // When component unmounts before the request completes
        if (response.name === 'AbortError') {
          return null
        }
        setError(response.message)
      } else {
        // TODO: Revisit this approach
        response[0] && setFavourite(response[0])
      }
      setIsPending(false)
    }
    getAsyncFavourites(abortGetFavourites)

    // abort the fetch request on unmount
    return () => abortGetFavourites.abort()
  }, [catId])

  const addFavourite = async () => {
    setIsPending(true)
    const response = await addFavouriteAPI(catId)

    if (response instanceof Error) {
      setError(response.message)
    } else if (response.message === 'SUCCESS') {
      setFavourite(response)
    } else {
      setError(new Error('Service could not add to favourite'))
    }
    setIsPending(false)
  }

  const deleteFavourite = async () => {

    setIsPending(true)
    const response = await deleteFavouriteAPI(favourite.id)
    if (response instanceof Error) {
      setError(response.message)
    } else if (response.message === 'SUCCESS') {
      setFavourite(null)
    } else {
      setError(new Error('Service could not delete from favourite'))
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
        onClick={() => favourite ? deleteFavourite() : addFavourite()}
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