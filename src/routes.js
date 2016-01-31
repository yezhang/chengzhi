import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './containers/App'
import AdminApp from './containers/AdminApp'
import NoMatch from './containers/NoMatch'
//import WelcomePage from './containers/WelcomePage'
//import LoginPage from './containers/LoginPage'
//import BillPage from './containers/BillPage'
//import NewBill from './components/NewBill'
//import HistoryBill from './components/HistoryBill'
import PrintEditPage from './containers/PrintEditPage'
import EditPage from './containers/EditPage'
import HomePage from './containers/HomePage'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            {
                <IndexRoute component={HomePage}/>
                //<Route path="login" component={LoginPage}/>
                //<Route path="bill" component={BillPage}>
                //<Route path="new" component={NewBill}></Route>
                //<Route path="history" component={HistoryBill}></Route>
                //</Route>

            }
            <Route path="admin" component={AdminApp}>
                <Route path="/print_edit" component={PrintEditPage}/>
                <Route path="/edit" component={EditPage}/>
            </Route>
            <Route path="*" component={NoMatch}/>

        </Route>
    </Router>

)
