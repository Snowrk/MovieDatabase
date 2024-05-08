import {useState, useEffect, useRef} from 'react'
import NavBar from '../NavBar'
import Sample from '../Sample'
import apiKey from '../../api'

import './index.css'

const CastCard = props => {
  const {name, character, profilePath} = props
  const imgUrl =
    profilePath !== null
      ? `https://image.tmdb.org/t/p/w138_and_h175_face${profilePath}`
      : null
  if (profilePath === null) {
    return <></>
  }
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

const MovieDetails = props => {
  const {match} = props
  const {params} = match
  const {id} = params
  const movieId = id
  const [page, setPage] = useState(1)
  const [url, setUrl] = useState('')
  const [details, setDetails] = useState({})
  const [cast, setCast] = useState({})
  const bgImg = useRef(null)
  const searchUrl = val => {
    setUrl(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${val}&page=${page}`,
    )
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
      const url1 = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
      const response1 = await fetch(url1)
      const data1 = await response1.json()
      // console.log(data1)
      setDetails(data1)
      const url2 = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
      const response2 = await fetch(url2)
      const data2 = await response2.json()
      // console.log(data2)
      setCast(data2)
    }

    if (url.length === 0) {
      getData()
    }
  }, [movieId, url.length])
  useEffect(() => {
    if (bgImg.current !== null) {
      // console.log(bgImg.current)
      bgImg.current.style.backgroundImage = `url(${`https://image.tmdb.org/t/p/w300_and_h450_bestv2${details.poster_path}`})`
    }
  })
  if (
    !(
      Object.getOwnPropertyNames(details).length > 0 &&
      Object.getOwnPropertyNames(cast).length > 0
    )
  ) {
    return <p>Loading Movie Details</p>
  }
  const hrs = Math.floor(details.runtime / 60)
  const mins = details.runtime % 60
  const duration = hrs > 0 ? `${hrs}:${mins}hrs` : `${mins}mins`
  return (
    <>
      <NavBar searchUrl={searchUrl} />
      {url.length > 0 ? (
        <Sample url={url} setPage={setPage} />
      ) : (
        <div className="details blur-img" ref={bgImg}>
          <div className="backdrop">
            <div className="wrapper">
              <div>
                <div className="details-card">
                  <div className="poster">
                    <img
                      src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${details.poster_path}`}
                      alt={details.original_title}
                    />
                  </div>
                  <div className="text">
                    <h1 className="title">{details.original_title}</h1>
                    <ul className="genres">
                      {details.genres.map(item => (
                        <li key={item.id}>{item.name}</li>
                      ))}
                    </ul>
                    <div className="info">
                      <p>Status: {details.status}</p>
                      <p>|</p>
                      <p>release Date: {details.release_date}</p>
                      <p>|</p>
                      <div className="flex">
                        <p>
                          ratings: {Math.round(details.vote_average * 10) / 10}
                        </p>
                      </div>
                      <p>|</p>
                      <p>Duration: {duration}</p>
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
                    {cast.cast.map(item => (
                      <CastCard
                        key={item.cast_id}
                        name={item.name}
                        character={item.character}
                        profilePath={item.profile_path}
                      />
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
