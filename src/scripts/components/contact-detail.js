import React, { PropTypes, Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class ContactDetails extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.element),
            PropTypes.element,
            PropTypes.string
        ]).isRequired
    }
    render() {
        let { label, children } = this.props;
        return (
            <Row>
                <Col xs={4}>
                    <strong>{label}</strong>
                </Col>
                <Col xs={8}>
                    {children}
                </Col>
            </Row>
        )
    }
}
