import React, { PropTypes, Component } from 'react';

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
                <div>
                    <Profile {...profile} />
                    <Social {...social} />
                </div>
            </div>
        );
    }
}
