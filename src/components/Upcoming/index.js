import {useState, useContext} from 'react'
// import NavBar from '../NavBar'
import Sample from '../Sample'
import Search from '../Search'
import {SearchContext} from '../../App'
import apiKey from '../../api'

const Upcoming = () => {
  const [page, setPage] = useState(1)
  const {activeSearch} = useContext(SearchContext)
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=${page}`

  // const searchUrl = val => {
  //   setUrl(
  //     `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${val}&page=${page}`,
  //   )
  // }
  return (
    <>{activeSearch ? <Search /> : <Sample url={url} setPage={setPage} />}</>
  )
}

export default Upcoming
