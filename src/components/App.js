import { Route, Routes, useLocation } from 'react-router-dom'

import Navbar from './Navbar/Navbar'
import CatView from './Views/CatView/CatView'
import HomeView from './Views/HomeView'
import { useStyles } from './App.styles'
import FavouritesView from './Views/FavouritesView'
import Modal from './Modal/Modal'

function App() {
  const classes = useStyles()
  const location = useLocation()
  const background = location.state?.background

  return (
    <div className={classes.app}>
      <Navbar />
      <div className={classes.content}>
        <Routes location={background || location}>
          <Route path='/' element={<HomeView />} />
          <Route path='/cat/:id' element={<CatView />} />
          <Route path='/favourites' element={<FavouritesView />} />
        </Routes>
        {background && (
          <Routes>
            <Route
              path='/cat/:id'
              element={
                <Modal>
                  <CatView />
                </Modal>
                }
            />
          </Routes>
        )}
      </div>
    </div>
  )
}

export default App
