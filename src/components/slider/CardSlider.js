import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class CardSlider extends Component {


    componentDidMount(){
        //渲染后,加载插件
    }

    componentWillUnmount(){
        //卸载插件
    }

    render() {
        const image1 = require("../../assets/img/red.png");
        const image2 = require("../../assets/img/yellow.png");
        const image3 = require("../../assets/img/green.png");

        return (
            <div ref="slider" >
                <div className="row">
                    <div className="col-md-3 text-center">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>晚辈压岁</h3>

                                <hr/>
                                <h3>父母孝敬</h3>
                                <hr/>
                                <h3>新婚祝福</h3>
                                <hr/>
                                <h3>生辰祝贺</h3>
                                <hr/>
                                <h3>DIY</h3>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-9">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="col-md-4">
                                    <Link className="thumbnail" style={{border: 0 + 'px'}}><img src={image1} alt=""/></Link>
                                </div>
                                <div className="col-md-4">
                                    <Link className="thumbnail" style={{border: 0 + 'px'}}><img src={image2} alt=""/></Link>
                                </div>
                                <div className="col-md-4">
                                    <Link className="thumbnail" style={{border: 0 + 'px'}}><img src={image3} alt=""/></Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

//Slider.propTypes = {
//    user: PropTypes.shape({
//        login: PropTypes.string.isRequired,
//        avatarUrl: PropTypes.string.isRequired,
//        name: PropTypes.string
//    }).isRequired
//}