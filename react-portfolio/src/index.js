import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './routes/Routes';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RoutesComponent />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
