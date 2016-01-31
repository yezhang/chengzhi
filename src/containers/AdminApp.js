/**
 * 新组件.
 * Created by better on 16/1/20.
 */

import React, {Component, PropTypes} from 'react';
//import {Panel, Label, Input, Button} from 'react-bootstrap';
import Header from './Header'

import '../assets/css/main.css'

export default class AdminApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Rendering AdminApp");
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


AdminApp.propTypes = {};