import React, { PropTypes, Component } from 'react';

import Section from '../components/section';
import ContactDetail from '../components/contact-detail';

export default class Contact extends Component {
    static propTypes = {
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        address: PropTypes.object.isRequired,
    }
    render() {
        let { email, phone, address } = this.props;
        let { street, zip, city, country } = address;
        return (
            <Section title="Contact">
                <ContactDetail label="E-mail">{email}</ContactDetail>
                <ContactDetail label="Phone">{phone}</ContactDetail>
                <ContactDetail label="Address">
                    <ul className="list-unstyled">
                        <li>{street}</li>
                        <li>{zip} {city}</li>
                        <li>{country}</li>
                    </ul>
                </ContactDetail>
            </Section>
        );
    }
}
