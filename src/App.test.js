import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


