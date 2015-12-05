import React, { PropTypes, Component } from 'react';

import Section from '../components/section';
import SocialLink from '../components/social-link';

export default class Social extends Component {
    static propTypes = {
        links: PropTypes.array.isRequired,
    }
    static icons = {
        github: "fa-github",
        linkedin: "fa-linkedin",
        facebook: "fa-facebook",
        twitter: "fa-twitter",
    }
    render() {
        let links = this.props.links.map(link => {
            return (
                <SocialLink
                    key={link.name}
                    url={link.url}
                    icon={Social.icons[link.name]}>
                    {link.caption}
                </SocialLink>
            );
        })
        return (
            <Section title="Social">
                {links}
            </Section>
        );
    }
}
