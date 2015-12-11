import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

export default class Job extends Component {
    static propTypes = {
        employer: PropTypes.string.isRequired,
        from: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageSrc: PropTypes.string,
    }
    render() {
        return (
            <div className="job">
                <img src={this.props.imageSrc} />
                <h3 className="employer">{this.props.employer}</h3>
                <h4 className="date-range">{this.props.from} - {this.props.to}</h4>
                <p className="description">{this.props.description}</p>
            </div>
        );
    }
}
