import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import HomeView from '../../../components/Views/HomeView'

const api = require('../../../util/api')

describe('Home view', () => {
  const MockHomeView = () => (
    <BrowserRouter>
      <HomeView />
    </BrowserRouter>
  )

  test('should render an image', async () => {
    jest.spyOn(api, 'getDataAPI').mockResolvedValue([
      {
        id: 'MTk4MTU4Mw',
        url: 'https://cdn2.thecatapi.com/images/MTk4MTU4Mw.jpg',
      },
    ])
    render(<MockHomeView />)

    screen.getByTestId('loading')

    await screen.findByTestId('img-MTk4MTU4Mw')
  })

  test('should render error', async () => {
    jest.spyOn(api, 'getDataAPI').mockResolvedValue(new Error('Something went wrong'))
    render(<MockHomeView />)

    await screen.findByTestId('error')
  })
})
