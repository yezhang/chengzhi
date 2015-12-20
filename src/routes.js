import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import WelcomePage from './containers/WelcomePage'
import UserPage from './containers/UserPage'
import RepoPage from './containers/RepoPage'



export default (
  <Route path="/" component={WelcomePage}>
    <Route path="/:login/:name"
           component={RepoPage} />
    <Route path="/:login"
           component={UserPage} />
  </Route>
)
