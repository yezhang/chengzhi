/**
 * Created by better on 15/12/19.
 */
import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            橙汁 &nbsp;
                            <small>爱,不只是红包</small>
                        </a>

                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to={`/bill`}>
                                    <span className="glyphicon glyphicon-list" aria-hidden="true"></span>
                                    &nbsp;订单
                                </Link>
                            </li>
                            <li>
                                <Link to={`/edit`}>
                                    <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
                                    &nbsp;编辑
                                </Link>
                            </li>
                            <li><Link to={`/login`}>登录</Link></li>
                            <li><a href="#">注册</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}