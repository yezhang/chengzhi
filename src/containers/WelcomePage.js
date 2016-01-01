import React, { Component, PropTypes } from 'react'
import CardSlider from '../components/slider/CardSlider'

export default class WelcomePage extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <CardSlider></CardSlider>
                    {
                        //<img className="img-thumbnail center-block" src={red1} alt="Chania"
                        //     />
                    }
                </div>

            </div>
        );
    }
}
