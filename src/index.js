import React from "react";
import ReactDOM from 'react-dom';

import App from './components/app'

/*
 * block JSX code - Babel translate this code to JS. Pure JS example this code:
 * const el = React.createElement('h1', null, 'Hello World example!')
 */
const el = (
  <App/>
);

ReactDOM.render(el, document.getElementById('root'));