import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import FavouritesView from '../../../components/Views/FavouritesView'

const api = require('../../../util/api')

describe('Favourites view', () => {
  const MockFavourtiesView = () => (
    <BrowserRouter>
      <FavouritesView />
    </BrowserRouter>
  )

  test('should render an image', async () => {
    jest.spyOn(api, 'getDataAPI').mockResolvedValue([
      {
        image: {
          id: 'MTk4MTU4Mw',
          url: 'https://cdn2.thecatapi.com/images/MTk4MTU4Mw.jpg',
        },
      },
    ])
    render(<MockFavourtiesView />)

    screen.getByTestId('loading')

    await screen.findByTestId('img-MTk4MTU4Mw')
  })

  test('should render error', async () => {
    jest.spyOn(api, 'getDataAPI').mockResolvedValue(new Error('Something went wrong'))
    render(<MockFavourtiesView />)

    await screen.findByTestId('error')
  })

  test('should render no favourites', async () => {
    jest.spyOn(api, 'getDataAPI').mockResolvedValue([])
    render(<MockFavourtiesView />)

    await screen.findByTestId('no-favourites')
  })
})