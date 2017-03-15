import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const ShowCard = ({ poster, title, year, description, imdbID }) => (
  <Link to={`/details/${imdbID}`}>
    <div className='show-card'>
      <img src={`/public/img/posters/${poster}`} />
      <div>
        <h3>{title}</h3>
        <h4>({year})</h4>
        <p>{description}</p>
      </div>
    </div>
  </Link>
)

ShowCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired
}

// this is for jest coverage not to break tests
// see https://github.com/facebook/jest/issues/2261
ShowCard.displayName = 'ShowCard'

export default ShowCard
