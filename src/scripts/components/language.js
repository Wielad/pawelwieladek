import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Language extends Component {
    static propTypes = {
        language: PropTypes.string.isRequired,
        level: PropTypes.string.isRequired
    }
    render() {
        return (
            <div className="language">
                <h3>{this.props.language}</h3>
                <h4>{this.props.level}</h4>
            </div>
        );
    }
}
