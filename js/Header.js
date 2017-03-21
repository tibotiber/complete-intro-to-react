import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setSearchTerm } from './actionCreators'

const { func, string, bool } = React.PropTypes

const Header = React.createClass({
  propTypes: {
    showSearch: bool,
    searchTerm: string,
    dispatchSetSearchTerm: func
  },
  handleSearchTermChange (e) {
    this.props.dispatchSetSearchTerm(e.target.value)
  },
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = (
        <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
      )
    } else {
      utilSpace = (
        <h2 className='header-back'>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header>
        <h1>
          <Link to='/'>
            svideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
})

const mapStateToProps = (state, ownProps) => {
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchSetSearchTerm: value => {
      dispatch(setSearchTerm(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
