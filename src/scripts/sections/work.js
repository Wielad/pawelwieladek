import _ from 'lodash';
import React, { PropTypes, Component } from 'react';

import Job from '../components/job';

import allegroImageSrc from '../../images/allegro.png';
import mybazeImageSrc from '../../images/mybaze.png';

export default class Work extends Component {
    static propTypes = {
        jobs: PropTypes.object.isRequired,
    }
    static images = {
        "allegro": allegroImageSrc,
        "mybaze": mybazeImageSrc
    }
    render() {
        let jobs = _.map(this.props.jobs, (job, key) => (
            <Job
                key={job.employer}
                {...job}
                imageSrc={Work.images[key]} />
        ));
        return (
            <div className="work">
                <section>
                    <div className="section-container">
                        <h2>Work experience</h2>
                        <div className="jobs-container">
                            {jobs}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
