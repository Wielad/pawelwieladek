import React, { PropTypes, Component } from 'react';

import Education from './education';
import Languages from './languages';

export default class Skills extends Component {
    static propTypes = {
        education: PropTypes.object.isRequired,
        languages: PropTypes.object.isRequired
    }
    render() {
        return (
            <div className="skills">
                <section>
                    <div className="section-container">
                        <div className="skills-container">
                            <Education {...this.props.education} />
                            <Languages languages={this.props.languages} />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
