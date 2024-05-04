import {useEffect, useState, useMemo} from 'react'
import {useLocation} from 'react-router-dom'
import MovieDetails from '../MovieDetails'
import NavBar from '../NavBar'
import CardList from '../CardList'
import API_KEY from '../../api'
import './index.css'

function useQuery() {
  const {search} = useLocation()

  return useMemo(() => new URLSearchParams(search), [search])
}

const Sample = props => {
  const query = useQuery()
  const [page, setPage] = useState(1)
  const MOVIE_NAME = query.get('search')
  const [pageData, setPageData] = useState({})
  const {match, location} = props
  const {path, params} = match
  const {id} = params
  // console.log(id)
  const MOVIE_ID = id !== undefined ? id : ''
  console.log(match)
  console.log(location)
  console.log(MOVIE_NAME)
  let url
  switch (path) {
    case '/':
      url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
      break
    case '/top-rated':
      url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
      break
    case '/upcoming':
      url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
      break
    default:
      url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
      break
  }
  if (MOVIE_NAME !== null) {
    url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${MOVIE_NAME}&page=${page}`
  }
  useEffect(() => {
    const getData = async () => {
      // const options = {
      //   method: 'GET',
      //   headers: {
      //     accept: 'application/json',
      //     Authorization:
      //       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTI0MDEyZmZkNGY1OTgzOWE4Nzg4NDljYzhkOTJhZSIsInN1YiI6IjY2MzQ3NzNiZDlmNGE2MDEyM2UyZWY0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mwFeMQnWwA91B6XUVevZguRuuMKPwcRZdVe7dtPkE6w',
      //   },
      // }
      const response = await fetch(url)
      const data = await response.json()
      setPageData(data)
      console.log(data)
    }

    getData()
  }, [page, url])
  if (!(Object.getOwnPropertyNames(pageData).length > 0)) {
    return <p>Loading</p>
  }
  return (
    <div className="bg-main">
      <NavBar search={MOVIE_NAME} />
      {MOVIE_ID.length > 0 ? (
        <MovieDetails MOVIE_ID={MOVIE_ID} />
      ) : (
        <CardList pageData={pageData} setPage={setPage} />
      )}
    </div>
  )
}

export default Sample
