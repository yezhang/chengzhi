import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import WelcomePage from './containers/WelcomePage'
import LoginPage from './containers/LoginPage'
import BillPage from './containers/BillPage'
import PrintEditPage from './containers/PrintEditPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={WelcomePage}/>
        <Route path="login" component={LoginPage}/>
        <Route path="bill" component={BillPage}/>
        <Route path="edit" component={PrintEditPage}/>
    </Route>
)
