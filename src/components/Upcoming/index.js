import {useEffect, useState} from 'react'
import {Audio} from 'react-loader-spinner'
import CardList from '../CardList'
import apiKey from '../api'
import './index.css'

const Upcoming = () => {
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [pageData, setPageData] = useState({})

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=${page}`
      const response = await fetch(url)
      const data = await response.json()
      setPageData(data)
      setIsLoading(false)
      console.log(data)
    }

    getData()
  }, [page])
  return <>{isLoading ? <Audio /> : <CardList pageData={pageData} />}</>
}

export default Upcoming
