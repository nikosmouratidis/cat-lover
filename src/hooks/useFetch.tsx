import { useState, useEffect } from 'react'
import { getDataAPI } from '../util/api'

function useFetch<T>(url: string): {
  data: T | null,
  isPending: boolean,
  error: string
}  {
  const [data, setData] = useState<T|null>(null)
  const [isPending, setIsPending] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const abortController = new AbortController()
    // The reason I don't move this declaration out of the useEffect is because
    // it will have to be wrapped with useCallback and add it as a usEffect dependency.
    // But that way on mount/unmount the instance of the abortController inside the getAsyncCatDetails
    // will be different from the one called in useEffect's cleanup function.
    const getAsyncCatDetails = async (abortController: AbortController) => {
      const response = await getDataAPI(url, abortController)
      if (response instanceof Error) {
        // When pending request aborts on unmount
        if (response.name === "AbortError") {
          return null
        }
        setError(response.message)
      } else {
        setData(response)
      }
      setIsPending(false)
    }

    getAsyncCatDetails(abortController)

    // abort the fetch request on unmount
    return () => {
      abortController.abort()
    }
  }, [url])

  return { data, isPending, error }
}

export default useFetch
