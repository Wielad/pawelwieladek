import React, { PropTypes, Component } from 'react';

import Section from '../components/section';
import Course from '../components/course';

export default class Education extends Component {
    static propTypes = {
        courses: PropTypes.array.isRequired,
    }
    render() {
        let courses = this.props.courses.map(course => <Course key={course.name} {...course} />);
        return (
            <Section title="Education">
                {courses}
            </Section>
        );
    }
}
