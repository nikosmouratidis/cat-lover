import { API_KEY, SERVICE_API } from "../components/constants"

export const getDataAPI = (url, abortController) => (
  fetch(url, {
      signal: abortController.signal,
      headers: {
        'x-api-key': API_KEY
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
  fetch(`${SERVICE_API}/favourites`, {
    signal: abortController.signal,
    headers: {
      'x-api-key': API_KEY
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
  fetch(`${SERVICE_API}/favourites/${favouriteId}`, {
    method: 'DELETE',
    headers: {
      'x-api-key': API_KEY
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
  fetch(`${SERVICE_API}/favourites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY
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