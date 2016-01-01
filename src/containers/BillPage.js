import React, { Component, PropTypes } from 'react'

/**
 * 订单管理页面
 */
export default class BillPage extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <ul className="nav nav-pills nav-stacked">
                            <li role="presentation" className="active">
                                <a href="#">
                                    Home
                                </a>
                            </li>
                            <li role="presentation"><a href="#">Profile</a></li>
                            <li role="presentation"><a href="#">Messages</a></li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        内容.
                    </div>
                </div>

            </div>
        );
    }
}