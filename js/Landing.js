import React from 'react'
import { Link } from 'react-router'
import '../public/normalize.css'
import '../public/style.css'

const Landing = () => (
  <div className='landing'>
    <h1>svideo</h1>
    <input type='text' placeholder='Search' />
    <Link to='/search' className='browse-all'>or Browse All</Link>
  </div>
)

export default Landing
