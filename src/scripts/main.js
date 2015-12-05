import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import '../styles/styles.scss';
import data from 'resume-data';
import App from './sections/app';

ReactDOM.render(
    <App {...data} />,
    document.querySelector('#app')
);
