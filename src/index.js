import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WithoutMemo from './WithoutMemo';
import reportWebVitals from './reportWebVitals';
import WithMemo from './WithMemo';

ReactDOM.render(
  <React.StrictMode>
    {/* <WithoutMemo /> */}
    <WithMemo />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
