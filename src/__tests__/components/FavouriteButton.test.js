import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import FavouriteButton from '../../components/FavouriteButton/FavouriteButton'

const api = require('../../util/api')

describe('FavouritesButton', () => {
  test('should render favouriteButton with message Loading', async () => {
    render(<FavouriteButton catId='MTk4MTU4Mw' />)

    expect(await screen.findByText('Loading')).toBeInTheDocument()
  })

  test('should render favouriteButton with message Add as a favourite and after clicking the message should change to Add', async () => {
    const user = userEvent

    jest.spyOn(api, 'getFavouriteAPI').mockResolvedValue([])

    render(<FavouriteButton catId='MTk4MTU4Mw' />)

    expect(await screen.findByText('Add as a favourite')).toBeInTheDocument()

    jest.spyOn(api, 'addFavouriteAPI').mockResolvedValue({ message: 'SUCCESS'})

    user.click(screen.getByTestId('favourite-button'))

    expect(await screen.findByText('Remove from favourites')).toBeInTheDocument()
  })

  test('should render favouriteButton with message Remove from favourites and after clicking the message should change to Add', async () => {
    const user = userEvent

    jest.spyOn(api, 'getFavouriteAPI').mockResolvedValue([{
      image_id: 'MTk4MTU4Mw'
    }])

    render(<FavouriteButton catId='MTk4MTU4Mw' />)

    expect(await screen.findByText('Remove from favourites')).toBeInTheDocument()

    jest.spyOn(api, 'deleteFavouriteAPI').mockResolvedValue({ message: 'SUCCESS'})

    user.click(screen.getByTestId('favourite-button'))

    expect(await screen.findByText('Add as a favourite')).toBeInTheDocument()
  })
})