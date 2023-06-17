export const getDataAPI = (url, abortController) => (
  fetch(url, {
      signal: abortController.signal,
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
    .then(data => data)
    .catch(error => error)
)

export const getFavourites = abortController => (
  fetch('https://api.thecatapi.com/v1/favourites', {
    signal: abortController.signal,
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
  .then(data => data)
  .catch(error => error)
)

export const deleteFavouriteAPI = favouriteId => (
  fetch(`https://api.thecatapi.com/v1/favourites/${favouriteId}`, {
    method: 'DELETE',
    headers: {
      'x-api-key': 'live_c5h73a38fsKfnVc75LzSvHy5N8NtAwbJ9v1f68cLbUKhmtnYBIRFhWT8dfkVh8gy'
    },
  })
  .then(res => {
    if (!res.ok) { // error coming back from server
      throw Error('Could not fetch the data for that resource')
    }
    return res.json()
  })
  .then(data => data)
  .catch(error => error)
)

export const addFavouriteAPI = catId => (
  fetch(`https://api.thecatapi.com/v1/favourites`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          'x-api-key': 'live_c5h73a38fsKfnVc75LzSvHy5N8NtAwbJ9v1f68cLbUKhmtnYBIRFhWT8dfkVh8gy'
        },
        body: JSON.stringify({ image_id: catId})
      })
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('Could not fetch the data for that resource')
        }
        return res.json()
      })
      .then(data => data)
      .catch(error => error)
)