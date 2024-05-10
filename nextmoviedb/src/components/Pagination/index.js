import './index.css'

const Pagination = props => {
  const {page, setPage} = props
  return (
    <ul className="pagination">
      <li>
        <button
          className="nav-next-prev"
          onClick={() => setPage(prev => (prev > 1 ? prev - 1 : prev))}
          type="button"
        >
          Prev
        </button>
      </li>
      <li>
        <button className="nav-page active" type="button">
          {page}
        </button>
      </li>
      <li>
        <button
          className="nav-next-prev"
          onClick={() => setPage(prev => prev + 1)}
          type="button"
        >
          Next
        </button>
      </li>
    </ul>
  )
}

export default Pagination
