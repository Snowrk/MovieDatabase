import './index.css'

// const Pagination = props => {
//   const {page, setPage} = props
//   return (
//     <ul className="pagination">
//       <li>
//         <button
//           className="nav-next-prev"
//           onClick={() => setPage(prev => (prev > 1 ? prev - 1 : prev))}
//           type="button"
//         >
//           Prev
//         </button>
//       </li>
//       <li>
//         <button className="nav-page active" type="button">
//           {page}
//         </button>
//       </li>
//       <li>
//         <button
//           className="nav-next-prev"
//           onClick={() => setPage(prev => prev + 1)}
//           type="button"
//         >
//           Next
//         </button>
//       </li>
//     </ul>
//   )
// }

const Pagination = props => {
  const {pageObj, setPage} = props
  const {startPage, lastPage, prevPage, nextPage, currentPage} = pageObj
  return (
    <ul className="pagination">
      <li>
        <button
          className="nav-next-prev"
          onClick={() => setPage(prev => (prev > 1 ? prev - 1 : prev))}
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
      {prevPage > startPage + 1 && <li>...</li>}
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
      {nextPage < lastPage - 1 && <li>...</li>}
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
          onClick={() => setPage(prev => prev + 1)}
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
