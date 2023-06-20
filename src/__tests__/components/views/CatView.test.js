import { BrowserRouter } from 'react-router-dom'

import { render, screen } from '@testing-library/react'
import CatView from '../../../components/Views/CatView/CatView'

const api = require('../../../util/api')

describe('CatsGrid in home view', () => {
  const MockCatView = () => (
    <BrowserRouter>
      <CatView variant='home'/>
    </BrowserRouter>
  )

  test('should render an image with breed details', async () => {
    jest.spyOn(api, 'getDataAPI').mockResolvedValue(
      {
        id: 'MTk4MTU4Mw',
        url: 'https://cdn2.thecatapi.com/images/MTk4MTU4Mw.jpg',
        breeds:[{ name: 'Singapore', id: 'sing'}]
      },
    )
    render(<MockCatView />)

    screen.getByTestId('loading')

    await screen.findByTestId('img-MTk4MTU4Mw')
    await screen.findByTestId('breed-sing')
  })

  test('should render an error', async () => {
    jest.spyOn(api, 'getDataAPI').mockResolvedValue(new Error('Something went wrong'))

    render(<MockCatView />)

    await screen.findByTestId('error')
  })

})