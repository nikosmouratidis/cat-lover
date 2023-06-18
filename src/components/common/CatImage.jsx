import { memo } from 'react'
import PropTypes from 'prop-types'

import { useStyles } from './CatImage.styles'

const CatImage = ({ imgSrc, catId }) => {
  const classes = useStyles()

  return (
    <img
      key={catId}
      className={classes.catImage}
      src={imgSrc}
      alt={`id ${catId}`}
      loading="lazy"
    />
  )
}

CatImage.propTypes = {
  imgSrc: PropTypes.string,
  catId: PropTypes.string
}

export default memo(CatImage)