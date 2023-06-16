import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController()

    fetch(url, {
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
      setData(data)
      setError(null)
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
  }, [url])

  return { data, isPending, error }
}

export default useFetch