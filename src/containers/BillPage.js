import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

/**
 * 订单管理页面
 */
export default class BillPage extends Component {
    render() {
        return (
            <div>
                <div className="page-header">
                    <h1>订单管理</h1>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <ul className="nav nav-pills nav-stacked">
                            <li role="presentation" className="active">
                                <Link to={`/bill/new`}>下单</Link>
                            </li>
                            <li role="presentation">
                                <Link to={`/bill/history`}>历史订单</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        {this.props.children}
                    </div>
                </div>

            </div>
        );
    }
}