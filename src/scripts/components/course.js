import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Course extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        university: PropTypes.string.isRequired,
        from: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        project: PropTypes.string.isRequired,
    }
    render() {
        return (
            <div className="course">
                <h3>{this.props.name} <span className="at">@</span> {this.props.university}</h3>
                <h4 className="date-range">{this.props.from} - {this.props.to}</h4>
                <p>
                    <strong>Project: </strong>
                    <span>{this.props.project}</span>
                </p>
            </div>
        );
    }
}
