import {useState, createContext} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import MovieDetails from './components/MovieDetails'
import Search from './components/Search'
import NavBar from './components/NavBar'
// import Test1 from './components/Test1'
// import Card from './components/Card'
import './App.css'

export const SearchContext = createContext({})

// write your code here
const App = () => {
  const [inp, setInp] = useState('')
  const [activeSearch, setActiveSearch] = useState(false)
  return (
    <SearchContext.Provider value={{activeSearch, inp}}>
      <div className="bg-main">
        <NavBar setActiveSearch={setActiveSearch} setInp={setInp} inp={inp} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/top-rated" component={TopRated} />
          <Route exact path="/upcoming" component={Upcoming} />
          <Route exact path="/movie/:id" component={MovieDetails} />
        </Switch>
      </div>
    </SearchContext.Provider>
  )
}

export default App
