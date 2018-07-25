import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
