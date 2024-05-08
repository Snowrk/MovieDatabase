import {useState} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const NavBar = props => {
  const {setActiveSearch, setInp, inp} = props
  const [active, setActive] = useState('popular')
  const checkSearch = () => {
    if (inp.length > 0) {
      setActiveSearch(true)
    }
  }

  return (
    <nav className="nav">
      <h1>movieDB</h1>
      <div className="nav-links">
        <Link to="/" className="link">
          <h1
            className="nav-btn"
            onClick={() => {
              setActive('popular')
              setActiveSearch(false)
            }}
            data-active={active === 'popular'}
          >
            Popular
          </h1>
        </Link>
        <Link to="/top-rated" className="link">
          <h1
            className="nav-btn"
            onClick={() => {
              setActive('top-rated')
              setActiveSearch(false)
            }}
            data-active={active === 'top-rated'}
          >
            Top Rated
          </h1>
        </Link>
        <Link to="/upcoming" className="link">
          <h1
            className="nav-btn"
            onClick={() => {
              setActive('upcoming')
              setActiveSearch(false)
            }}
            data-active={active === 'upcoming'}
          >
            Upcoming
          </h1>
        </Link>
      </div>
      <div className="search">
        <input
          type="search"
          value={inp}
          placeholder="search"
          onChange={event => setInp(event.target.value)}
        />

        <button type="button" onClick={checkSearch}>
          Search
        </button>
      </div>
    </nav>
  )
}

export default NavBar
