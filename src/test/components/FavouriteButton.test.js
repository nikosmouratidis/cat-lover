// import { act } from 'react-dom/test-utils'

import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import FavouriteButton from '../../components/FavouriteButton'

const api = require('../../util/api')

describe('FavourtisButton', () => {
  test('should render favouriteButton with message Loading', async () => {
    render(<FavouriteButton catId='MTk4MTU4Mw' />)

    expect(await screen.findByText('Loading')).toBeInTheDocument()
  })

  test('should render favouriteButton with message Add as a favourite', async () => {
    jest.spyOn(api, 'getFavourites').mockResolvedValue([])
    render(<FavouriteButton catId='MTk4MTU4Mw' />)

    expect(await screen.findByText('Add as a favourite')).toBeInTheDocument()
  })

  test('should render favouriteButton with message Remove from favourites', async () => {
    jest.spyOn(api, 'getFavourites').mockResolvedValue([{
      image_id: 'MTk4MTU4Mw'
    }])
    render(<FavouriteButton catId='MTk4MTU4Mw' />)

    expect(await screen.findByText('Remove from favourites')).toBeInTheDocument()
  })

  test('should render on error', async () => {
    jest.spyOn(api, 'getFavourites').mockResolvedValue(new Error('Something went wrong'))
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act( async () => {render(<FavouriteButton catId='MTk4MTU4Mw' />)})

    expect(screen.queryByTestId('favourite-button')).toBeNull()
  })
})