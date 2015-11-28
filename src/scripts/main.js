import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import '../styles/styles.scss';
import data from '../data/data.js';
import App from './sections/app';

ReactDOM.render(
    <App {...data} />,
    document.querySelector('#app')
);
