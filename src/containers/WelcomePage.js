/**
 * Created by better on 15/12/19.
 */
import React, { Component, PropTypes } from 'react'
import Header from './Header'

import '../assets/css/main.css'
const red1 = require('../assets/img/red1.png');

export default class WelcomePage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container cz-body">
                    <div className="row">
                        <img className="img-thumbnail center-block" src={red1} alt="Chania"
                             />
                    </div>

                </div>

            </div>
        );
    }
}
