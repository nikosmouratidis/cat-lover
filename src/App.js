import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import CatView from './components/Views/CatView'
import HomeView from './components/Views/HomeView'
import { useStyles } from './App.styles'

function App() {
  const classes = useStyles()

  return (
    <Router>
      <div className={classes.app}>
        <Navbar />
        <div className={classes.content}>
          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path="/cat/:id" element={<CatView />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
