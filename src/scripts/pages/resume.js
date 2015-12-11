import React, { PropTypes, Component } from 'react';

import Introduction from './introduction';
import Features from './features';

export default class Resume extends Component {
    static propTypes = {
        profile: PropTypes.object.isRequired,
        social: PropTypes.object.isRequired,
        work: PropTypes.object.isRequired,
        education: PropTypes.object.isRequired,
        languages: PropTypes.object.isRequired,
    }

    render() {
        let { profile, social, work, education, languages } = this.props;
        return (
            <div className="resume">
                <div className="border top"></div>
                <div className="border right"></div>
                <div className="border bottom"></div>
                <div className="border left"></div>
                <div className="pages">
                    <Introduction profile={profile} social={social} />
                    <Features
                        work={work}
                        education={education}
                        languages={languages} />
                </div>
            </div>
        );
    }
}
