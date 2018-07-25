import React, { Component } from 'react';
import PropTypes from 'prop-types';

import profilePictureSrc from '../../images/profile.jpg';

export default class Profile extends Component {
    static propTypes = {
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }

    render() {
        let { firstName, lastName, title, description } = this.props;
        return (
            <div className="profile">
                <img src={profilePictureSrc} />
                <h1>{firstName} {lastName}</h1>
                <h2>{title}</h2>
                <h3 className="description">{description}</h3>
            </div>
        );
    }
}
