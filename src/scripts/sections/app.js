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
        contact: PropTypes.object.isRequired,
        social: PropTypes.object.isRequired,
        work: PropTypes.object.isRequired,
        education: PropTypes.object.isRequired,
    }
    render() {
        let { header, profile, contact, social, work, education } = this.props;
        return (
            <Grid>
                <Row>
                    <Col md={4} className="sidebar">
                        <Header {...header} />
                        <Profile {...profile} />
                        <Contact {...contact} />
                        <Social {...social} />
                    </Col>
                    <Col md={8}>
                        <Work {...work} />
                        <Education {...education} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
