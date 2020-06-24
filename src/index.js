import React from 'react';
import ReactDOM from 'react-dom';

import data from './devdata';

import App from './components/App';

ReactDOM.render(
  <App contests={data.contests} />,
  document.getElementById('root')
);
