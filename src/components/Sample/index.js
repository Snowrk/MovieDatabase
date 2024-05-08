import {useEffect, useState} from 'react'
import CardList from '../CardList'
import './index.css'

const Sample = props => {
  const {url, setPage} = props
  const [pageData, setPageData] = useState({})

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
    }

    getData()
  }, [url])
  if (!(Object.getOwnPropertyNames(pageData).length > 0)) {
    return <p>Loading</p>
  }
  return <CardList pageData={pageData} setPage={setPage} />
}

export default Sample
