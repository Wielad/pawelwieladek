import React, { PropTypes, Component } from 'react';

import Work from './../sections/work';
import Eduction from './../sections/education';

export default class Features extends Component {
    static propTypes = {
        work: PropTypes.object.isRequired,
        education: PropTypes.object.isRequired,
    }
    render() {
        let { work, education } = this.props;
        return (
            <div className="features">
                <Work {...work} />
                <Eduction {...education} />
            </div>
        );
    }
}
