/**
 * Created by better on 15/12/19.
 */
import React, { Component, PropTypes } from 'react'
import Header from './Header'


import '../assets/css/main.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container cz-body">
                    <div style={{minHeight:'400px'}}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
