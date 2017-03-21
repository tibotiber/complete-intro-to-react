import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import { Provider } from 'react-redux'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../public/data.json'
import store from './store'

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className='app'>
        <Match exactly pattern='/' component={Landing} />
        <Match pattern='/search' component={props => <Search shows={preload.shows} {...props} />} />
        <Match
          pattern='/details/:id'
          component={props => {
            var show = preload.shows.filter(s => s.imdbID === props.params.id)
            return <Details show={show[0]} />
          }}
        />
      </div>
    </Provider>
  </BrowserRouter>
)

render(<App />, document.getElementById('app'))
