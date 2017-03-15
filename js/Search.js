import React from 'react'
import ShowCard from './ShowCard'
import Header from './Header'

const { shape, arrayOf, string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(
      shape({
        title: string,
        description: string
      })
    )
  },
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermChange (e) {
    this.setState({
      searchTerm: e.target.value
    })
  },
  render () {
    return (
      <div className='search'>
        <Header handleSearchTermChange={this.handleSearchTermChange} showSearch searchTerm={this.state.searchTerm} />
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) > -1
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    )
  }
})

export default Search
