import { useState, useEffect, memo } from 'react'

import { useStyles } from './FavouriteButton.styles'

const FavouriteButton = ({ catId }) => {
  const [favourite, setFavourite] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  const classes = useStyles()

  useEffect(() => {
    const abortCont = new AbortController()

    fetch('https://api.thecatapi.com/v1/favourites', {
      signal: abortCont.signal,
      headers: {
        'x-api-key': 'live_c5h73a38fsKfnVc75LzSvHy5N8NtAwbJ9v1f68cLbUKhmtnYBIRFhWT8dfkVh8gy'
      }
    })
    .then(res => {
      if (!res.ok) { // error coming back from server
        throw Error('Could not fetch the data for that resource')
      }
      return res.json()
    })
    .then(data => {
      setIsPending(false)
      setError(null)

      const favourite = data.find(favourite => favourite.image_id === catId)
      favourite && setFavourite(favourite)
    })
    .catch(err => {
      if (err.name === 'AbortError') {
        console.log('fetch aborted')
      } else {
        setIsPending(false)
        setError(err.message)
      }
    })

    // abort the fetch
    return () => abortCont.abort()
  }, [catId])

  const handleFavourite = (e) => {
    // e.preventDefault()
    setIsPending(true)
    if (favourite) {
      fetch(`https://api.thecatapi.com/v1/favourites/${favourite.id}`, {
        method: 'DELETE',
        headers: {
          'x-api-key': 'live_c5h73a38fsKfnVc75LzSvHy5N8NtAwbJ9v1f68cLbUKhmtnYBIRFhWT8dfkVh8gy'
        },
      }).then(res => {
        setFavourite(null)
      })
    } else {
      fetch(`https://api.thecatapi.com/v1/favourites`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          'x-api-key': 'live_c5h73a38fsKfnVc75LzSvHy5N8NtAwbJ9v1f68cLbUKhmtnYBIRFhWT8dfkVh8gy'
        },
        body: JSON.stringify({ image_id: catId})
      })
      .then(res => {
        return res.json()
      })
      .then(data => setFavourite(data))
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
        disabled={isPending }
      >
        { favButtonMsg }
      </button>
  )
}

export default memo(FavouriteButton)