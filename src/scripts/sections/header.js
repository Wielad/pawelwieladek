import React, { PropTypes, Component } from 'react';

import headerPictureSrc from '../../images/profile.jpg';

export default class Header extends Component {
    static propTypes = {
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }
    render() {
        let { firstName, lastName, title } = this.props;
        return (
            <div className="header">
                <img src={headerPictureSrc} />
                <h1>{firstName} {lastName}</h1>
                <h3>{title}</h3>
            </div>
        );
    }
}
