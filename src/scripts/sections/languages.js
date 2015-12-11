import _ from 'lodash';
import React, { PropTypes, Component } from 'react';

import Language from '../components/language';

export default class Languages extends Component {
    static propTypes = {
        languages: PropTypes.object.isRequired,
    }
    render() {
        let languages = _.map(this.props.languages, (lang, id) => <Language key={id} {...lang} />);
        return (
            <div className="languages">
                <h2>Languages</h2>
                <div className="languages-container">
                    {languages}
                </div>
            </div>
        );
    }
}
