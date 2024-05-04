import {useState, useEffect} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {IoIosSearch} from 'react-icons/io'
import './index.css'

const NavBar = props => {
  const {match, search, history} = props
  console.log(search)
  const [inp, setInp] = useState('')
  console.log(inp)
  const {path} = match
  const onSearch = e => {
    e.preventDefault()
    if (inp.length < 1) {
      alert('search is empty')
      return
    }
    history.push(`/search?search=${inp}`)
  }
  useEffect(() => {
    setInp(search !== null ? search : '')
  }, [search])
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
                data-active={path === '/'}
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
                data-active={path === '/top-rated'}
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
                data-active={path === '/upcoming'}
              >
                Upcoming
              </button>
            </li>
          </Link>
        </ul>
      </div>
      <form onSubmit={onSearch} className="search">
        <input
          type="search"
          value={inp}
          placeholder="search"
          onChange={event => setInp(event.target.value)}
        />
        <button type="submit">
          <IoIosSearch />
        </button>
      </form>
    </nav>
  )
}

export default withRouter(NavBar)
