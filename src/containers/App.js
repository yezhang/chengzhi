/**
 * Created by better on 15/12/19.
 */
import React, { Component, PropTypes } from 'react'


export default class App extends Component {
    render() {
        return (
           <div>{this.props.children}</div>
        );
    }
}
