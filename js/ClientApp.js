import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Match } from 'react-router'
import Landing from './Landing'
import Search from './Search'

const App = () => (
  <HashRouter>
    <div className='app'>
      <Match exactly pattern='/' component={Landing} />
      <Match pattern='/search' component={Search} />
    </div>
  </HashRouter>
)

render(<App />, document.getElementById('app'))
