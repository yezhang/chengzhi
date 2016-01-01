import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class NewBill extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">新订单</h3>
                </div>
                <div className="panel-body">
                    <form className="form-horizontal">
                        <h4>印刷信息</h4>
                        <hr/>
                        <div className="form-group">
                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">称谓</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                       placeholder="对方的称呼"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">祝福语</label>
                            <div className="col-sm-10">
                                            <textarea className="form-control" rows="3"
                                                      placeholder="送给对方的祝福"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">签名</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                       placeholder="买家的签名"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">打印份数</label>
                            <div className="col-sm-2">
                                <input type="number" className="form-control"
                                       placeholder="0"/>
                            </div>
                        </div>
                        <h4>配送信息</h4>
                        <hr/>
                        <div className="form-group">
                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">手机</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                       placeholder="买家手机号"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword3" className="col-sm-2 control-label">地址</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                       placeholder="买家收货地址"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button className="btn btn-primary pull-left">确认</button>
                                <button className="btn btn-default pull-right">取消</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        );
    }
}