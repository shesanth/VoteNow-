import React from 'react';
import ReactDOM from 'react-dom';
import AddressPage from './addresspage';

ReactDOM.render(
  <AddressPage url="/api/v1/voterinfo/" />,
  document.getElementById('reactEntry'),
);