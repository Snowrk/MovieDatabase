import {useEffect, useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import CardList from './components/CardList'
import NavBar from './components/NavBar'
import Home from './components/Home'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import MovieDetails from './components/MovieDetails'
import Pagination from './components/Pagination'
// import Test1 from './components/Test1'
// import Card from './components/Card'
import apiKey from './api'
import './App.css'

// write your code here
const App = () => {
  const [page, setPage] = useState(1)
  const [inp, setInp] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchData, setSearchData] = useState({})
  const [active, setActive] = useState(window.location.pathname)
  console.log(active)
  const initSearch = () => {
    if (inp.length > 0) {
      setPage(1)
      setSearchQuery(inp)
      setActive('search')
    }
  }
  useEffect(() => {
    const getSearchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=${page}`,
      )
      const data = await res.json()
      setSearchData(data)
    }
    if (searchQuery.length > 0) {
      getSearchData()
    }
  }, [searchQuery, page])
  // const path = window.location.pathname
  // useEffect(() => {
  //   if (setActive !== 'search') {
  //     switch (path) {
  //       case '/':
  //         setActive('popular')
  //         break
  //       case '/top-rated':
  //         setActive('top-rated')
  //         break
  //       case '/upcoming':
  //         setActive('upcoming')
  //         break
  //       default:
  //         console.log('inside switch')
  //         setActive('false')
  //         break
  //     }
  //   }
  //   console.log(window.location.pathname)
  // }, [path])
  return (
    <div className="bg-main">
      <NavBar
        initSearch={initSearch}
        inp={inp}
        setInp={setInp}
        active={active}
        setActive={setActive}
        setPage={setPage}
      />
      {active === 'search' ? (
        <CardList pageData={searchData} setActive={setActive} />
      ) : (
        <Switch>
          <Route exact path="/" render={() => <Home page={page} />} />
          <Route
            exact
            path="/top-rated"
            render={() => <TopRated page={page} />}
          />
          <Route
            exact
            path="/upcoming"
            render={() => <Upcoming page={page} />}
          />
          <Route
            exact
            path="/movie/:id"
            render={() => <MovieDetails page={page} />}
          />
        </Switch>
      )}
      <Pagination page={page} setPage={setPage} />
    </div>
  )
}

export default App
