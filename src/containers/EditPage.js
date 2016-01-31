/**
 * 定制化工具.
 * Created by better on 16/1/30.
 */

import React, {Component, PropTypes} from 'react';
//import {Panel, Label, Input, Button} from 'react-bootstrap';
var ReactCanvas = require('react-canvas');

var Surface = ReactCanvas.Surface;
var Image = ReactCanvas.Image;
var Text = ReactCanvas.Text;

export default class EditPage extends Component {
    constructor(props) {
        super(props);
    }

    getImageHeight = ()=> {
        return Math.round(window.innerHeight / 2);
    };

    getImageStyle = () => {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: this.getImageHeight()
        };
    };

    getTextStyle = function () {
        return {
            top: this.getImageHeight() + 10,
            left: 0,
            width: window.innerWidth,
            height: 20,
            lineHeight: 20,
            fontSize: 12
        };
    };

    render() {
        var surfaceWidth = 600;
        var surfaceHeight = 801;
        var imageStyle = this.getImageStyle();
        var textStyle = this.getTextStyle();
        const bg = require("../assets/img/ground-yellow.png");

        return (
            <Surface width={surfaceWidth} height={surfaceHeight} left={0} top={0} myprop="12">
                <Image style={imageStyle} src={bg}/>
                <Text style={textStyle}>
                    Here is some text below an image.
                </Text>
            </Surface>
        );
    }
}


EditPage.propTypes = {};