import React from 'react'
import { Route } from 'react-router'
import WelcomePage from './containers/WelcomePage'
import App from './containers/App'
import UserPage from './containers/UserPage'
import RepoPage from './containers/RepoPage'
import LoginPage from './containers/LoginPage'

export default (
  <Route path="/" component={WelcomePage}>
    <Route path="login"
           component={LoginPage} />
  </Route>
)
