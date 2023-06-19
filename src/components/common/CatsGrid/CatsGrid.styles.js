import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: 10
  },
})