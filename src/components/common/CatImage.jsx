import { useStyles } from './CatImage.styles'

const CatImage = ({ cat }) => {
  const classes = useStyles()

  return (
    <img
      key={cat.id}
      className={classes.catImage}
      src={cat.url}
      alt={`id ${cat.id}`}
      width={cat.width}
      height={cat.height}
      loading="lazy"
    />
  )
}

export default CatImage