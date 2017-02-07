import React, { PropTypes } from 'react'

const ShowCard = ({ show }) => (
  <div className='show-card'>
    <img src={`/public/img/posters/${show.poster}`} />
    <div>
      <h3>{show.title}</h3>
      <h4>({show.year})</h4>
      <p>{show.description}</p>
    </div>
  </div>
)

ShowCard.propTypes = {
  show: PropTypes.object.isRequired
}

export default ShowCard
