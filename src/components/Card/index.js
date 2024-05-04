import {Link} from 'react-router-dom'
import {IoIosStar} from 'react-icons/io'
import './index.css'

const Card = props => {
  const {imgUrl, title, ratings, id} = props
  return (
    <li className="card">
      <img src={imgUrl} alt={title} />
      <div className="desc">
        <p>{title}</p>
        <div className="ratings">
          <IoIosStar />
          <p>{ratings}</p>
        </div>
      </div>
      <Link to={`/movie/${id}`} className="link btn-link">
        <button className="card-btn" type="button">
          View Details
        </button>
      </Link>
    </li>
  )
}

export default Card
