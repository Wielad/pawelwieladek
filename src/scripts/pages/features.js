import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Work from './../sections/work';
import Skills from './../sections/skills';

export default class Features extends Component {
    static propTypes = {
        work: PropTypes.object.isRequired,
        education: PropTypes.object.isRequired,
        languages: PropTypes.object.isRequired,
    }
    render() {
        let { work, education, languages } = this.props;
        return (
            <div className="features">
                <Work {...work} />
                <Skills
                    education={education}
                    languages={languages} />
            </div>
        );
    }
}
