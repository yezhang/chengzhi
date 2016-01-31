/**
 * 新组件.
 * Created by better on 16/1/30.
 */

import React, {Component, PropTypes} from 'react';


export default class NoMatch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this);
        return (
            <div>
                <h4>没有匹配的内容.</h4>
                <p>
                    {JSON.stringify(this.props.location)}
                </p>
            </div>
        );
    }
}


NoMatch.propTypes = {};