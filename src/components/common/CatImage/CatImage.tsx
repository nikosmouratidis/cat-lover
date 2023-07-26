import React, { memo } from 'react'

import { useStyles } from './CatImage.styles'

type Props = {
  imgSrc: string,
  catId: string
}

const CatImage: React.FC<Props> = ({ imgSrc, catId }) => {
  const classes = useStyles()

  return (
    <img
      data-testid={`img-${catId}`}
      key={catId}
      className={classes.catImage}
      src={imgSrc}
      alt={`id ${catId}`}
      loading="lazy"
    />
  )
}

export default memo(CatImage)