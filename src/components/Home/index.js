import {useEffect, useState} from 'react'
import Loader from 'react-loader-spinner'
import CardList from '../CardList'
import apiKey from '../../api'
import './index.css'

const Home = props => {
  // const [page, setPage] = useState(1)
  const {page} = props
  const [isLoading, setIsLoading] = useState(true)
  const [pageData, setPageData] = useState({})

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
      const response = await fetch(url)
      const data = await response.json()
      setPageData(data)
      setIsLoading(false)
      console.log(data)
    }

    getData()
  }, [page])
  return <>{isLoading ? <Loader /> : <CardList pageData={pageData} />}</>
}

export default Home
