import React from 'react'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = () => (
  <div className='search'>
    <pre><code>
      { preload.shows.map((show) => <ShowCard key={show.imdbID} show={show} />) }
    </code></pre>
  </div>
)

export default Search
