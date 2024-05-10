import {Link} from 'react-router-dom'
import './index.css'

const Card = props => {
  const {imgUrl, title, ratings, id, setActive} = props
  const set = () => {
    if (setActive !== undefined) {
      setActive('false')
    }
  }
  return (
    <li className="card">
      <img src={imgUrl} alt={title} />
      <div className="desc">
        <p>{title}</p>
        <div className="ratings">
          <p>{ratings}</p>
        </div>
      </div>
      <Link to={`/movie/${id}`} className="link btn-link">
        <button className="card-btn" type="button" onClick={set}>
          View Details
        </button>
      </Link>
    </li>
  )
}

export default Card
