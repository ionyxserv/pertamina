import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Employee from './Employee';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Employee/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
