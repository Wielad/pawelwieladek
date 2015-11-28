import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

export default class ContactDetails extends Component {
    static propTypes = {
        url: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.element),
            PropTypes.element,
            PropTypes.string
        ]).isRequired
    }
    render() {
        return (
            <a href={this.props.url} target="_blank" className="social-link">
                <ul className="list-inline">
                    <li>
                        <span className={classNames('fa', 'fa-fw', this.props.icon, 'icon')} />
                    </li>
                    <li className="caption">{this.props.children}</li>
                </ul>
            </a>
        );
    }
}
