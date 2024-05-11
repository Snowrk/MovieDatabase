import {useState, useEffect, useRef} from 'react'
import { usePathname } from 'next/navigation'
import {Audio} from 'react-loader-spinner'
import apiKey from '../api'

import './index.css'

const CastCard = props => {
  const {name, character, profilePath} = props
  const imgUrl = `https://image.tmdb.org/t/p/w300${profilePath}`

  return (
    <li className="cast-card">
      <div className="img-con">
        <img src={imgUrl} alt={name} />
      </div>
      <div className="cast-desc">
        <p>{name}</p>
        <p>{character}</p>
      </div>
    </li>
  )
}

const MovieDetails = () => {
  const pathname = usePathname()
  console.log(pathname.slice(pathname.lastIndexOf('/')+1,))
  const movieId = pathname.slice(pathname.lastIndexOf('/')+1,)
  const [details, setDetails] = useState({})
  const [cast, setCast] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const bgImg = useRef(null)
  // const hrs =
  //   details.runtime !== undefined ? Math.floor(details.runtime / 60) : 0
  // const mins = details.runtime !== undefined ? details.runtime % 60 : 0
  // const duration = hrs > 0 ? `${hrs}:${mins}hrs` : `${mins}mins`
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
      const url1 = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
      const response1 = await fetch(url1)
      const data1 = await response1.json()
      console.log(data1)
      setDetails(data1)
      const url2 = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
      const response2 = await fetch(url2)
      const data2 = await response2.json()
      console.log(data2)
      setCast(data2)
      setIsLoading(false)
    }

    getData()
  }, [movieId])
  useEffect(() => {
    if (bgImg.current !== null) {
      console.log(bgImg.current)
      bgImg.current.style.backgroundImage = `url(${`https://image.tmdb.org/t/p/w300_and_h450_bestv2${details.backdrop_path}`})`
    }
  })

  return (
    <>
      {isLoading ? (
        <Audio />
      ) : (
        <div className="details blur-img" ref={bgImg}>
          <div className="backdrop">
            <div className="wrapper">
              <div>
                <div className="details-card">
                  <div className="poster">
                    <img
                      src={`https://image.tmdb.org/t/p/w300${details.poster_path}`}
                      alt={details.original_title}
                    />
                  </div>
                  <div className="text">
                    <h1 className="title">{details.title}</h1>
                    <ul className="genres">
                      {details.genres?.map(item => (
                        <li key={item.id}>{item.name}</li>
                      ))}
                    </ul>
                    <div className="info">
                      <p>Status: {details.status}</p>
                      <p>|</p>
                      <p>release Date: {details.release_date}</p>
                      <p>|</p>
                      <div className="flex">
                        <p>ratings: {details.vote_average}</p>
                      </div>
                      <p>|</p>
                      <p>Duration: {details.runtime} mins</p>
                    </div>
                    <p className="tagline">{details.tagline}</p>
                    <p>Overview</p>
                    <p>{details.overview}</p>
                  </div>
                </div>
              </div>
              <div className="bg-cast">
                <div className="cast-container">
                  <h1>Cast</h1>
                  <ul className="cast-list">
                    {cast.cast?.map(item => (
                      item.profile_path !== null?(<CastCard
                        key={item.cast_id}
                        name={item.original_name}
                        character={item.character}
                        profilePath={item.profile_path}
                      />):null
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MovieDetails
