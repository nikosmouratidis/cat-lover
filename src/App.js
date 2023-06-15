import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import Home from './ui/Pages/Home'
import Navbar from './components/Navbar'
// import Create from './ui/Pages/Create'
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
            {/* <Route path="/create" element={<Create />} /> */}
            <Route path="/cat/:id" element={<CatView />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
