import './index.css'

const Pagination = props => {
  const {pageObj, setPage} = props
  const {startPage, lastPage, prevPage, nextPage, currentPage} = pageObj
  return (
    <ul className="pagination">
      <li>
        <button
          className="nav-next-prev"
          onClick={() => setPage(prevPage)}
          disabled={prevPage <= 0}
          type="button"
        >
          {'<'}
        </button>
      </li>
      {currentPage !== startPage && (
        <li>
          <button
            className="nav-page"
            onClick={() => setPage(startPage)}
            type="button"
          >
            {startPage}
          </button>
        </li>
      )}
      {prevPage > startPage && <li>...</li>}
      {prevPage > startPage && (
        <li>
          <button
            className="nav-page"
            onClick={() => setPage(prevPage)}
            type="button"
          >
            {prevPage}
          </button>
        </li>
      )}
      <li>
        <button className="nav-page active" type="button">
          {currentPage}
        </button>
      </li>
      {nextPage < lastPage && (
        <li>
          <button
            className="nav-page"
            onClick={() => setPage(nextPage)}
            type="button"
          >
            {nextPage}
          </button>
        </li>
      )}
      {nextPage < lastPage && <li>...</li>}
      {currentPage !== lastPage && (
        <li>
          <button
            className="nav-page"
            onClick={() => setPage(lastPage)}
            type="button"
          >
            {lastPage}
          </button>
        </li>
      )}
      <li>
        <button
          className="nav-next-prev"
          onClick={() => setPage(nextPage)}
          disabled={nextPage > lastPage}
          type="button"
        >
          {'>'}
        </button>
      </li>
    </ul>
  )
}

export default Pagination
