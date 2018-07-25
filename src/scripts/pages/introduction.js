import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Profile from './../sections/profile';
import Social from './../sections/social';

export default class Introduction extends Component {
    static propTypes = {
        profile: PropTypes.object.isRequired,
        social: PropTypes.object.isRequired,
    }

    render() {
        let { profile, social } = this.props;
        return (
            <div className="introduction">
                <section>
                    <div className="section-container">
                        <Profile {...profile} />
                        <Social {...social} />
                    </div>
                </section>
            </div>
        );
    }
}
