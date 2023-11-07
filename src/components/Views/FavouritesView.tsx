import React from 'react'
import CatsGrid from '../common/CatsGrid/CatsGrid'
import { TFavouriteData } from '../../@types'
import useFetch from '../../hooks/useFetch'
import { SERVICE_API } from '../../constants'

const FavouritesView = () => {

  const {
    data, isPending, error
  }: {
    data: TFavouriteData[] | null, isPending: boolean, error:string
  } = useFetch(`${SERVICE_API}/favourites`)

  if (isPending) {
    return <div data-testid='loading'>Loading...</div>
  }

  if (error) {
    return <div data-testid='error'>{ error }</div>
  }

  if (data === null) {
    return null
  }

  if (data.length === 0) {
    return  <div data-testid='no-favourites'>You have no favourites cats...</div>
  }

  const cats = data.map((cat) => cat.image)

  return (
    <CatsGrid cats={cats} />
  )
}

export default FavouritesView