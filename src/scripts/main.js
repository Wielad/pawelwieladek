import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Button, Row, Col, Jumbotron } from 'react-bootstrap';
import classNames from 'classnames';

import '../styles/styles.scss';
import imgSrc from '../images/profile.jpg';

const App = React.createClass({
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={4}>
                        <PageHeader />
                        <Profile />
                        <Contact />
                        <Social />
                    </Col>
                </Row>
            </Grid>
        );
    }
});

const Section = React.createClass({
    propTypes: {
        title: PropTypes.string.isRequired,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.element),
            PropTypes.element
        ]).isRequired
    },
    render() {
        return (
            <section>
                <div className="text-center">
                    <h2>{this.props.title}</h2>
                </div>
                {this.props.children}
            </section>
        );
    }
});

const PageHeader = React.createClass({
    render() {
        return (
            <div className="profile-header">
                <img src={imgSrc} />
                <h1>Pawel Wieladek</h1>
                <h3>Web Developer</h3>
            </div>
        );
    }
});

const Profile = React.createClass({
    render() {
        return (
            <Section title="Profile">
                <p className="text-center">24-year old web developer from Warsaw, Poland with 3+ years of experience in software development.</p>
            </Section>
        );
    }
});

const ContactDetail = React.createClass({
    propTypes: {
        label: PropTypes.string.isRequired,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.element),
            PropTypes.element,
            PropTypes.string
        ]).isRequired
    },
    render() {
        return (
            <Row>
                <Col xs={4} className="text-right">
                    <strong>{this.props.label}</strong>
                </Col>
                <Col xs={8}>
                    {this.props.children}
                </Col>
            </Row>
        );
    }
});

const Contact = React.createClass({
    render() {
        return (
            <Section title="Contact">
                <ContactDetail label="E-mail">pawelwieladek@gmail.com</ContactDetail>
                <ContactDetail label="Phone">+48 793 775 960</ContactDetail>
                <ContactDetail label="Address">
                    <ul className="list-unstyled">
                        <li>Trasa Lubelska 1</li>
                        <li>05-462 Majdan</li>
                        <li>Poland</li>
                    </ul>
                </ContactDetail>
            </Section>
        );
    }
});

const Social = React.createClass({
    render() {
        return (
            <Section title="Social">
                <ul className="list-inline text-center">
                    <li>
                        <a href="https://github.com/pawelwieladek" target="_blank">
                            <span className={classNames('fa', 'fa-fw', 'fa-2x', 'fa-github')} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/pawelwieladek" target="_blank">
                            <span className={classNames('fa', 'fa-fw', 'fa-2x', 'fa-linkedin')} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/wielad" target="_blank">
                            <span className={classNames('fa', 'fa-fw', 'fa-2x', 'fa-facebook')} />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/pawelwieladek" target="_blank">
                            <span className={classNames('fa', 'fa-fw', 'fa-2x', 'fa-twitter')} />
                        </a>
                    </li>
                </ul>
            </Section>
        );
    }
});

ReactDOM.render(<App />, document.querySelector('#app'));
