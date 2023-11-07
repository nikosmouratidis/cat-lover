import React, { useState, useEffect, memo } from 'react'

import { useStyles } from './FavouriteButton.styles'
import { addFavouriteAPI, deleteFavouriteAPI, getDataAPI } from '../../util/api'
import { SERVICE_API } from '../../constants'
import { TFavouriteData } from '../../@types'

type Props = {
  catId: string
}

const FavouriteButton: React.FC<Props> = ({ catId }) => {
  const [favourite, setFavourite] = useState<TFavouriteData|null>(null)
  const [isPending, setIsPending] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

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
    const getAsyncFavourites = async (abortGetFavourites: AbortController) => {
      // const response = await getDataAPI(catId, abortGetFavourites)
      const response = await getDataAPI(`${SERVICE_API}/favourites?image_id=${catId}`, abortGetFavourites)
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

  if (error) {
    return null
  }

  const addFavourite = async () => {
    setIsPending(true)
    const response = await addFavouriteAPI(catId)

    if (response instanceof Error) {
      setError(response.message)
    } else if (response.message === 'SUCCESS') {
      setFavourite(response)
    } else {
      setError('Service could not add to favourite')
    }
    setIsPending(false)
  }

  const deleteFavourite = async (favourite: TFavouriteData) => {
    setIsPending(true)
    const response = await deleteFavouriteAPI(favourite.id)
    if (response instanceof Error) {
      setError(response.message)
    } else if (response.message === 'SUCCESS') {
      setFavourite(null)
    } else {
      setError('Service could not delete from favourite')
    }
    setIsPending(false)
  }

  const favButtonMsg = isPending
    ? 'Loading'
    : favourite
      ? 'Remove from favourites'
      : 'Add as a favourite'

  return (
    <button
        className={classes.favouriteButton}
        onClick={() => favourite ? deleteFavourite(favourite) : addFavourite()}
        disabled={isPending}
        data-testid='favourite-button'
      >
        { favButtonMsg }
      </button>
  )
}

export default memo(FavouriteButton)