import {useState, useContext} from 'react'
// import NavBar from '../NavBar'
import Sample from '../Sample'
import Search from '../Search'
import apiKey from '../../api'
import {SearchContext} from '../../App'

const Home = () => {
  const [page, setPage] = useState(1)
  const {activeSearch} = useContext(SearchContext)
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
  // const searchUrl = val => {
  //   setUrl(
  //     `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${val}&page=${page}`,
  //   )
  // }
  return (
    <>{activeSearch ? <Search /> : <Sample url={url} setPage={setPage} />}</>
  )
}

export default Home
