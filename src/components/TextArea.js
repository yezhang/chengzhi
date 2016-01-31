/**
 * Created by better on 16/1/11.
 */
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import ContentEditable from 'react-contenteditable'

export default class TextArea extends Component {
    constructor(props) {
        super(props);

        this.state =
        {
            html: "123lio0。"
        };

    }

    render() {
        return (
            <div>
                <ContentEditable className="cz-textArea" style={{'fontStyle': 'italic', 'fontFamily':'Lucida Console'}}
                                 html={this.state.html}>
                </ContentEditable>
            </div>
        );
    }
}