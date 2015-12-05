import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

export default class Job extends Component {
    static propTypes = {
        employer: PropTypes.string.isRequired,
        from: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }
    render() {
        return (
            <div className="job">
                <h3>{this.props.employer}</h3>
                <h4 className="date-range">{this.props.from} - {this.props.to}</h4>
                <p>{this.props.description}</p>
            </div>
        );
    }
}
