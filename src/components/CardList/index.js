import Card from '../Card'
import Pagination from '../Pagination'

const CardList = props => {
  const {pageData, setPage} = props
  const startPage = 1
  const currentPage = pageData.page
  const lastPage = pageData.total_pages < 500 ? pageData.total_pages : 500
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1
  const pageObj = {startPage, lastPage, currentPage, nextPage, prevPage}
  return (
    <>
      <ul className="cards-list">
        {pageData.results.map(item =>
          item.poster_path !== null ? (
            <Card
              title={item.title}
              imgUrl={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              ratings={Math.round(item.vote_average * 10) / 10}
              id={item.id}
              key={item.id}
            />
          ) : null,
        )}
      </ul>
      <Pagination pageObj={pageObj} setPage={setPage} />
    </>
  )
}

export default CardList
