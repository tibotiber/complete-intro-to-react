import React, { PropTypes } from 'react'

const ShowCard = ({ poster, title, year, description }) => (
  <div className='show-card'>
    <img src={`/public/img/posters/${poster}`} />
    <div>
      <h3>{title}</h3>
      <h4>({year})</h4>
      <p>{description}</p>
    </div>
  </div>
)

ShowCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default ShowCard
