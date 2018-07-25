import React from 'react';
import ReactDOM from 'react-dom';

import data from '../data/resume-data';
import Resume from './pages/resume';

ReactDOM.render(
    <Resume {...data} />,
    document.querySelector('#app')
);
