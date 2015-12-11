import React, { PropTypes, Component } from 'react';
import { Label } from 'react-bootstrap';
import classNames from 'classnames';

export default class Job extends Component {
    static propTypes = {
        employer: PropTypes.string.isRequired,
        from: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired,
        imageSrc: PropTypes.string,
    }
    render() {
        let tags = this.props.tags.map(tag => <Label key={tag}>#{tag}</Label>);
        return (
            <div className="job">
                <img src={this.props.imageSrc} />
                <h3 className="employer">{this.props.employer}</h3>
                <h4 className="date-range">{this.props.from} - {this.props.to}</h4>
                <p className="description">{this.props.description}</p>
                <div className="tag-container">
                    {tags}
                </div>
            </div>
        );
    }
}
