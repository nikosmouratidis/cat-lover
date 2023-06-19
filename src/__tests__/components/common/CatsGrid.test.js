import { BrowserRouter } from 'react-router-dom'

import { render, screen } from '@testing-library/react'
import CatsGrid from '../../../components/common/CatsGrid/CatsGrid'

const api = require('../../../util/api')

describe('CatsGrid in home view', () => {
  const MockCatsGrid = () => (
    <BrowserRouter>
      <CatsGrid variant='home'/>
    </BrowserRouter>
  )

  test('should render an image', async () => {
    jest.spyOn(api, 'getDataAPI').mockResolvedValue([
      {
        id: 'MTk4MTU4Mw',
        url: 'https://cdn2.thecatapi.com/images/MTk4MTU4Mw.jpg',
      },
    ])
    render(<MockCatsGrid />)

    screen.getByTestId('loading')

    await screen.findByTestId('img-MTk4MTU4Mw')
  })

  test('should render error', async () => {
    jest.spyOn(api, 'getDataAPI').mockResolvedValue(new Error('Something went wrong'))
    render(<MockCatsGrid />)

    await screen.findByTestId('error')
  })
})

describe('CatsGrid in favourites view', () => {
  const MockCatsGrid = () => (
    <BrowserRouter>
      <CatsGrid variant='favourites'/>
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
    render(<MockCatsGrid />)

    screen.getByTestId('loading')

    await screen.findByTestId('img-MTk4MTU4Mw')
  })

  test('should render error', async () => {
    jest.spyOn(api, 'getDataAPI').mockResolvedValue(new Error('Something went wrong'))
    render(<MockCatsGrid />)

    await screen.findByTestId('error')
  })

  test('should render no favourites', async () => {
    jest.spyOn(api, 'getDataAPI').mockResolvedValue([])
    render(<MockCatsGrid />)

    await screen.findByTestId('no-favourites')
  })
})
