import {useState, useContext} from 'react'
import Sample from '../Sample'
import {SearchContext} from '../../App'
import apiKey from '../../api'

const Search = props => {
  const {inp} = useContext(SearchContext)
  const [page, setPage] = useState(1)
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${inp}&page=${page}`

  return (
    <>
      <Sample url={url} setPage={setPage} />
    </>
  )
}

export default Search
