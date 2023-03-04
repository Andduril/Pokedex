import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'

it('render home page', () => {
  render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
})
