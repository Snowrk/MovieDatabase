import {Link} from 'react-router-dom'
import './index.css'

const NavBar = props => {
  const {inp, setInp, initSearch, active, setActive, setPage} = props
  // console.log(window.location.pathname)
  // const set = location => {
  //   if (inp.length > 0) {
  //     return '/search'
  //   }
  //   return `${location.pathname}`
  // }

  return (
    <nav className="nav">
      <h1>movieDB</h1>
      <div>
        <ul className="nav-list">
          <Link to="/" className="link">
            <li>
              <button
                type="button"
                className="nav-btn"
                data-active={active === '/'}
                onClick={() => {
                  setActive('/')
                  setPage(1)
                }}
              >
                Popular
              </button>
            </li>
          </Link>
          <Link to="/top-rated" className="link">
            <li>
              <button
                type="button"
                className="nav-btn"
                data-active={active === '/top-rated'}
                onClick={() => {
                  setActive('/top-rated')
                  setPage(1)
                }}
              >
                Top Rated
              </button>
            </li>
          </Link>
          <Link to="/upcoming" className="link">
            <li>
              <button
                type="button"
                className="nav-btn"
                data-active={active === '/upcoming'}
                onClick={() => {
                  setActive('/upcoming')
                  setPage(1)
                }}
              >
                Upcoming
              </button>
            </li>
          </Link>
        </ul>
      </div>
      <form className="search">
        <input
          type="text"
          value={inp}
          placeholder="Search"
          onChange={event => setInp(event.target.value)}
        />

        <button type="button" onClick={initSearch}>
          Search
        </button>
      </form>
    </nav>
  )
}

export default NavBar
