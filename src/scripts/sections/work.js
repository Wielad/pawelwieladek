import React, { PropTypes, Component } from 'react';

import Section from '../components/section';
import Job from '../components/job';

export default class Work extends Component {
    static propTypes = {
        jobs: PropTypes.array.isRequired,
    }
    render() {
        let jobs = this.props.jobs.map(job => <Job key={job.employer} {...job} />);
        return (
            <Section title="Work experience">
                {jobs}
            </Section>
        );
    }
}
