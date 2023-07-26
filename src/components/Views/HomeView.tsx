import React from 'react'
import CatsGrid from '../common/CatsGrid/CatsGrid'
import useFetch from '../../hooks/useFetch'
import { SERVICE_API } from '../../constants'
import { TCatImageData } from '../../@types'

const HomeView = () => {
  const {
    data, isPending, error
  }: {
    data: TCatImageData[] | null, isPending: boolean, error: string
  } = useFetch<TCatImageData[]>(`${SERVICE_API}/images/search/?limit=10`)

  if (isPending) {
    return <div data-testid='loading'>Loading...</div>
  }

  if (error) {
    return <div data-testid='error'>{ error }</div>
  }

  if (data === null) {
    return null
  }

  return (
    <CatsGrid cats={data}/>
  )
}

export default HomeView