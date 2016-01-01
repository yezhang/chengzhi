import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import WelcomePage from './containers/WelcomePage'
import LoginPage from './containers/LoginPage'
import BillPage from './containers/BillPage'
import NewBill from './components/NewBill'
import HistoryBill from './components/HistoryBill'
import PrintEditPage from './containers/PrintEditPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={WelcomePage}/>
        <Route path="login" component={LoginPage}/>
        <Route path="bill" component={BillPage}>
            <Route path="new" component={NewBill}></Route>
            <Route path="history" component={HistoryBill}></Route>
        </Route>
        <Route path="edit" component={PrintEditPage}/>
    </Route>
)
