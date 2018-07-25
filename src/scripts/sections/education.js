import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Course from '../components/course';

export default class Education extends Component {
    static propTypes = {
        courses: PropTypes.array.isRequired,
    }
    render() {
        let courses = this.props.courses.map(course => <Course key={course.name} {...course} />);
        return (
            <div className="education">
                <h2>Education</h2>
                {courses}
            </div>
        );
    }
}
