import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class SocialLink extends Component {
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
                    <li className="caption visible-print-inline">
                        {this.props.children}
                    </li>
                </ul>
            </a>
        );
    }
}
