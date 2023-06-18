import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './Navbar'
import CatView from './Views/CatView'
import HomeView from './Views/HomeView'
import { useStyles } from './App.styles'
import FavouritesView from './Views/FavourtiesVIew'

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
