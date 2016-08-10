import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import SearchResultPage from './containers/SearchResultPage'

export default (
  <Route path="/" component={App}>
    <Route path="/search/:text"
           component={SearchResultPage} />
  </Route>
)
