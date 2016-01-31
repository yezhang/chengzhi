import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import TextArea from '../components/TextArea'

/**
 * 印刷品分层制作工具.
 */
export default class PrintEditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLayer: {},
            layers: [
                {
                    name: '层1',
                    visible: true,
                    opacity: 1
                },
                {
                    name: '层2',
                    visible: true,
                    opacity: 1
                }
            ],
            position: {
                x: 0,
                y: 0
            },
            currentCanvas: null,
            bufferCanvas: null
        };
    };

    componentDidMount() {

        var canvas = ReactDOM.findDOMNode(this.refs.canvas);
        var buffer = ReactDOM.findDOMNode(this.refs.bufferCanvas);

        this.setState(
            {
                currentCanvas: canvas,
                bufferCanvas: buffer
            });

        this.initBgImage();
    }

    initBgImage = ()=>{
        const bg = require("../assets/img/ground-yellow.png");
        let img = new Image();
        img.addEventListener("load", function () {
            console.log("Finished.");
            //this.drawBgImage(img);
        }.bind(this), false);
        img.src = bg; // Set source path
    };

    componentDidUpdate() {

        //console.log('update');
    }

    getMousePos = (canvas, evt) => {
        var rect = canvas.getBoundingClientRect();
        return {
            x: Math.round(evt.pageX - rect.left),
            y: Math.round(evt.pageY - rect.top)
        };
    };

    handleMouseMove = (e) => {
        var canvas = ReactDOM.findDOMNode(this.refs.canvas);

        this.setState({
            position: this.getMousePos(canvas, e)
        });
    };

    render() {

        //console.log("EditPage");
        const {position:{ x, y}} = this.state;

        const bg = require("../assets/img/ground-yellow.png");

        //<img style={{width:100 + '%'}} src={bg} alt=""/>
        return (
            <div >
                <div className="page-header">
                    <h1>设计上层文字</h1>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="insideWrapper">
                                    <canvas id="canvas" ref="canvas"
                                            className="transparentCanvas grayCanvasColor"></canvas>

                                        <img src={bg} className="coveredImage"/>
                                        <canvas id="cursorCanvas" ref="cursorCanvas"
                                                className="transparentCanvas textCursor"
                                                onMouseMove={this.handleMouseMove}></canvas>

                                    <TextArea ></TextArea>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <div className="well">
                            <div id="cursorPos">当前文字位置: x: {x}, y: {y}</div>
                        </div>

                        <div>
                            <div className="btn-group" role="group" aria-label="...">
                                <button type="button" className="btn btn-default">打印预览</button>
                                <button type="button" className="btn btn-default">打印</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}