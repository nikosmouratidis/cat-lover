import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './Navbar/Navbar'
import CatView from './Views/CatView/CatView'
import HomeView from './Views/HomeView'
import { useStyles } from './App.styles'
import FavouritesView from './Views/FavouritesView'

function App() {
  const classes = useStyles()

  return (
    <Router>
      <div className={classes.app}>
        <Navbar />
        <div className={classes.content}>
          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/cat/:id' element={<CatView />} />
            <Route path='/favourites' element={<FavouritesView />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
