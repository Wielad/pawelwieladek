import React, { PropTypes, Component } from 'react';

import Course from '../components/course';

export default class Education extends Component {
    static propTypes = {
        courses: PropTypes.array.isRequired,
    }
    render() {
        let courses = this.props.courses.map(course => <Course key={course.name} {...course} />);
        return (
            <div className="education">
                <section>
                    <div className="section-container">
                        <h2>Education</h2>
                        {courses}
                    </div>
                </section>
            </div>
        );
    }
}
