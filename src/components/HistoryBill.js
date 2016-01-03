import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import * as util from '../util/common'

export default class HistoryBill extends Component {
    render() {

        let date = new Date();

        const image2 = require("../assets/thumb/yellow_40x80.png");

        return (
            <div>
                <h3>历史订单</h3>
                <hr/>
                <div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">{date.toLocaleDateString()}</h3>
                        </div>
                        <div className="panel-body">
                            <div className="col-md-2 cz-thinBorder cz-verticalSpace cz-thinHorizontalSpace">
                                <img className="media-object media-middle center-block cz-rotate" src={image2} alt="..."></img>
                            </div>
                            <div className="col-md-4">
                                <h5>商品信息</h5>
                                <p>温暖黄主题红包, 孝敬父母.</p>
                                <p>红包虽小, 唯暖人心.</p>
                            </div>
                            <div className="col-md-2">
                                <h5>单价(元)</h5>
                                <p>15</p>
                            </div>
                            <div className="col-md-2">
                                <h5>数量(个)</h5>
                                <p>2</p>
                            </div>
                            <div className="col-md-2">
                                <h5>金额(元)</h5>
                                <p>30</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}