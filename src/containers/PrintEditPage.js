import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import {resizeCanvas} from 'pica'

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

    }

    componentDidUpdate() {
        const bg = require("../assets/img/ground-yellow.png");
        let img = new Image();
        img.addEventListener("load", function () {
            console.log("Finished.");
            //this.drawBgImage(img);
        }.bind(this), false);
        img.src = bg; // Set source path

    }

    /**
     * 将画布调整为image大小,并绘制.
     *
     * @param canvas
     * @param img
     */
    drawInCanvas = (canvas, img)=> {
        let cav = canvas;

        let ctx = canvas.getContext('2d');

        //var imgHeight = w / img.width * img.height;
        cav.width = img.width;
        cav.height = img.height;

        let w = cav.width;
        let h = cav.height;

        ctx.save();

        ctx.drawImage(img, 0, 0, w, h);

        ctx.restore();
    };

    /**
     * 根据img宽和高,调整画布的宽和高.
     * 返回调整后的宽和高.
     *
     * @param cav 画布
     * @param img
     */
    resizeCanvasToImage = (cav, img)=> {
        let w = cav.width;
        let h = cav.height;

        var imgHeight = w / img.width * img.height;
        cav.height = imgHeight;

        return {
            width: w,
            height: h
        }
    };

    drawBgImage = (img)=> {
        let cav = this.state.currentCanvas;
        this.resizeCanvasToImage(cav, img);

        let buffer = this.state.bufferCanvas;
        this.drawInCanvas(buffer, img);


        //{quality: 3, alpha: true, unsharpAmount: 50, unsharpRadius: 2, unsharpRadius: 2},
        //resizeCanvas(buffer, cav,
        //    {quality: 3, alpha: true, unsharpAmount: 70, unsharpRadius: 0.6, unsharpThreshold: 3},
        //    (err)=> {
        //    });
    };

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