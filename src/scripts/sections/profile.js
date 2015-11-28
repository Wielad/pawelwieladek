import React, { PropTypes, Component } from 'react';

import Section from '../components/section';

export default class Header extends Component {
    static propTypes = {
        description: PropTypes.string.isRequired,
    }
    render() {
        let { description } = this.props;
        return (
            <Section title="Profile">
                <p>{description}</p>
            </Section>
        );
    }
}
