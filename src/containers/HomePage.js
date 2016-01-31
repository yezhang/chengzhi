/**
 * 首页.
 * Created by better on 16/1/19.
 */

import React, {Component, PropTypes} from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
//import 'react-addons-css-transition-group'
import {Panel, Label, Input, Button} from 'react-bootstrap';

import '../assets/css/welcome.css';
import '../assets/css/animate.css';

const prod1 = require('../assets/images/产品1.png'); //父爱如山
const prod2 = require('../assets/images/产品2.png'); //母爱如水
const prod3 = require('../assets/images/产品3.png'); //阖家欢乐
const prod4 = require('../assets/images/产品4.png'); //新年快乐
const prod5 = require('../assets/images/产品5.png'); //小黄人
const prod7 = require('../assets/images/产品7.png'); //贺岁(横幅)


export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: [{
                image1: prod1,
                image2: prod5,
                image3: prod2
            }, {
                image1: prod3,
                image2: prod7,
                image3: prod4
            }],
            groupIndex: 0

        }
    }

    onClickRight = (event)=> {
        console.log("right");
        this.swipe();
    };

    swipe = () => {
        let index = this.state.groupIndex;
        index = (index + 1) % 2;
        this.updateGroup(index);
    };

    updateGroup = (index) => {
        this.setState(Object.assign({}, this.state, {groupIndex: index}));
    };

    onClickLeft = (event) => {
        console.log("left");
        this.swipe();
    };

    onBuyClick = (event) => {
        window.location = "https://shop145174635.taobao.com";
    };

    render() {
        const index = this.state.groupIndex;
        let {image1, image2, image3} = this.state.groups[index];

        let minions;
        if (index == 0) {
            minions = 'happyMinionOnDesktop'
        } else {
            minions = 'sadMinionOnDesktop'
        }
        return (
            <div>
                <div className="content">
                    <div className="layer flexLayout">
                        <div className="leftSide">

                        </div>
                        <div className="girl">
                            <div className="dashboard">
                                <div className="dashboardLeftButton" onClick={this.onClickLeft}></div>
                                <div className="dashboardRightButton" onClick={this.onClickRight}></div>

                                <div className="spaceBorder flexCenterContainer">
                                    <div className="redPacketVerticalBg bounceAnimation">
                                        <div className="centerPacket">
                                            <ReactCSSTransitionReplace transitionName="packet"
                                                                       transitionAppear={true}
                                                                       transitionAppearTimeout={500}
                                                                       transitionEnterTimeout={500}
                                                                       transitionLeave={false}
                                                                       transitionLeaveTimeout={300}>
                                                <img src={image1} key={image1} alt=""/>
                                            </ReactCSSTransitionReplace>
                                        </div>

                                    </div>
                                    <div className="redPacketVerticalBg offsetOnePacket bounceAnimation animationDelay">
                                        <div className="centerPacket">
                                            <ReactCSSTransitionReplace transitionName="packet"
                                                                       transitionAppear={true}
                                                                       transitionAppearTimeout={500}
                                                                       transitionEnterTimeout={500}
                                                                       transitionLeave={false}
                                                                       transitionLeaveTimeout={300}>
                                                <img src={image2} key={image2} alt=""/>
                                            </ReactCSSTransitionReplace>
                                        </div>

                                    </div>
                                    <div className="redPacketVerticalBg offsetTwoPacket
                                    bounceAnimation animationDelay1s">
                                        <div className="centerPacket">
                                            <ReactCSSTransitionReplace transitionName="packet"
                                                                       transitionAppear={true}
                                                                       transitionAppearTimeout={500}
                                                                       transitionEnterTimeout={500}
                                                                       transitionLeave={false}
                                                                       transitionLeaveTimeout={300}>
                                                <img src={image3} key={image3} alt=""/>
                                            </ReactCSSTransitionReplace>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className={minions}>

                            </div>
                        </div>
                        <div className="rightSide"></div>
                    </div>

                    <div className="layer">
                        <div className="lantern">
                            <div className="download">

                            </div>

                            <div className="contactUs">

                            </div>
                        </div>

                        <div className="lintel"></div>

                        <div className="countDown"></div>
                    </div>

                    <div className="layer">

                        <div className="footer">
                            <div className="buyButton" onClick={this.onBuyClick}>
                                <div className="minionOnBuyButton">

                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
        );
    }
}


HomePage.propTypes = {};