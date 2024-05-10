import {useState} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './index.css'

const NavBar = props => {
  const [inp, setInp] = useState('')
  const pathname = usePathname()
  const path = inp.length>0?`/search?query=${inp}`:pathname

  return (
    <nav className="nav">
      <h1>movieDB</h1>
      <div>
        <ul className="nav-list">
          <Link href="/" className="link">
            <li>
              <button
                type="button"
                className="nav-btn"
                data-active={pathname === '/'}
              >
                Popular
              </button>
            </li>
          </Link>
          <Link href="/top-rated" className="link">
            <li>
              <button
                type="button"
                className="nav-btn"
                data-active={pathname === '/top-rated'}
              >
                Top Rated
              </button>
            </li>
          </Link>
          <Link href="/upcoming" className="link">
            <li>
              <button
                type="button"
                className="nav-btn"
                data-active={pathname === '/upcoming'}
              >
                Upcoming
              </button>
            </li>
          </Link>
        </ul>
      </div>
      <form className="search">
        <input
          type="search"
          value={inp}
          placeholder="Search"
          onChange={event => setInp(event.target.value)}
        />
        <Link href={path} className='link'>
        <button type="button">
          Search
        </button>
        </Link>
      </form>
    </nav>
  )
}

export default NavBar
