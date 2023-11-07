import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useStyles } from './CatsGrid.styles'
import CatImage from '../CatImage/CatImage'
import { TCatImageData, TImage } from '../../../@types'

type Props = {
  cats: TCatImageData[] | TImage[]
}

const CatsGrid: React.FC<Props> = ({ cats }) => {
  const location = useLocation()
  const classes = useStyles()

  return (
    <div className={classes.gridContainer}>
      {cats?.map(cat => (
          <Link
            to={`/cat/${cat.id}`}
            state={{ background: location }}
            key={`${cat.id}-link`}
          >
            <CatImage catId={cat.id} imgSrc={cat.url} />
          </Link>
      ))}
    </div>
  )
}

export default CatsGrid