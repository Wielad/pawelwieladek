import React, { PropTypes, Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from './header';
import Profile from './profile';
import Contact from './contact';
import Social from './social';
import Work from './work';
import Education from './education';

export default class App extends Component {
    static propTypes = {
        header: PropTypes.object.isRequired,
        profile: PropTypes.object.isRequired,
        social: PropTypes.object.isRequired,
        work: PropTypes.object.isRequired,
        education: PropTypes.object.isRequired,
    }
    render() {
        let { header, profile, social, work, education } = this.props;
        return (
            <div className="resume">
                <div className="introduction">
                    <Header {...header} />
                    <Profile {...profile} />
                    <Social {...social} />
                </div>
                <div className="features">
                    <Work {...work} />
                    <Education {...education} />
                </div>
            </div>
        );
    }
}
