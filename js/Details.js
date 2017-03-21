import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { getOmdbData } from './actionCreators'

const { shape, string, func } = React.PropTypes

const Details = React.createClass({
  propTypes: {
    show: shape({
      title: string,
      year: string,
      poster: string,
      trailer: string,
      description: string,
      imdbID: string
    }),
    omdbData: shape({
      imdbID: string,
      imdbRating: string
    }),
    dispatchGetOmdbData: func
  },
  componentDidMount () {
    if (!this.props.omdbData.imdbRating) {
      this.props.dispatchGetOmdbData(this.props.show.imdbID)
    }
  },
  render () {
    const { title, year, poster, trailer, description } = this.props.show
    let rating
    if (this.props.omdbData.imdbRating) {
      rating = <h3>{this.props.omdbData.imdbRating}</h3>
    } else {
      rating = <img src='/public/img/loading.png' alt='loading indicator' />
    }
    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {rating}
          <img src={`/public/img/posters/${poster}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder='0'
            allowFullScreen
          />
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state, ownProps) => {
  return {
    omdbData: state.omdbData[ownProps.show.imdbID] || {}
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchGetOmdbData: imdbID => {
      dispatch(getOmdbData(imdbID))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
