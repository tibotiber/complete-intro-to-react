import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
import '../public/normalize.css'
import '../public/style.css'

const { string, func, object } = React.PropTypes

const Landing = React.createClass({
  contextTypes: {
    router: object
  },
  propTypes: {
    searchTerm: string,
    dispatchSetSearchTerm: func
  },
  handleSearchTermChange (e) {
    this.props.dispatchSetSearchTerm(e.target.value)
  },
  handleSearchSubmit (e) {
    e.preventDefault()
    this.context.router.transitionTo('/search')
  },
  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input
            onChange={this.handleSearchTermChange}
            value={this.props.searchTerm}
            type='text'
            placeholder='Search'
          />
        </form>
        <Link to='/search' className='browse-all'>or Browse All</Link>
      </div>
    )
  }
})

const mapStateToProps = (state, ownProps) => {
  return {
    searchTerm: state.searchTerm,
    dispatch: func
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchSetSearchTerm: value => {
      dispatch(setSearchTerm(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
