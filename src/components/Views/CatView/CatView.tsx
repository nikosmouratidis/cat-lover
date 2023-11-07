import React from 'react'
import { useParams } from 'react-router-dom'

import { useStyles } from './CatView.styles'
import CatImage from '../../common/CatImage/CatImage'
import FavouriteButton from '../../FavouriteButton/FavouriteButton'
import useFetch from '../../../hooks/useFetch'
import { SERVICE_API } from '../../../constants'
import { TBreed, TImageData } from '../../../@types'

const CatView = () => {
  const { id } = useParams()
  const classes = useStyles()

  const { data, isPending, error } = useFetch<TImageData>(`${SERVICE_API}/images/${id}`)

  if (isPending) {
    return <div data-testid='loading'>Loading...</div>
  }

  if (error) {
    return <div data-testid='error'>{ error }</div>
  }

  if (data === null) {
    return null
  }

  const breeds = data.breeds || []

  return (
    <div className={classes.catView}>
      <CatImage catId={data.id} imgSrc={data.url} />
      <FavouriteButton catId={data.id} />
        {breeds.length > 0 &&
          <div className={classes.breedDetails}>
            <div className={classes.breedHeader}> Breed: </div>
            {breeds.map((breed: TBreed) => (
                <div
                  className={classes.breedText}
                  key={`${breed.id}`}
                  data-testid={`breed-${breed.id}`}
                >
                  {breed.name}
                </div>
            ))}
          </div>
        }
    </div>
  )
}

export default CatView