/**
 * Created by better on 15/12/19.
 */
import React, { Component, PropTypes } from 'react'
import Header from './Header'
import CardSlider from '../components/slider/CardSlider'

import '../assets/css/main.css'

export default class WelcomePage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container cz-body">
                    <div className="row">
                        <CardSlider></CardSlider>
                        {
                        //<img className="img-thumbnail center-block" src={red1} alt="Chania"
                        //     />
                        }
                    </div>

                    <div style={{minHeight:'400px'}}>
                        {this.props.children}
                    </div>
                </div>

            </div>
        );
    }
}
