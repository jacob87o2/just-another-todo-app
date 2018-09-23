import React from 'react';

import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  it('verify if component renders without errors', () => {
    const props = {
      handleAddItem: jest.fn(),
      handleCancelEditItem: jest.fn(),
      handleDeleteItem: jest.fn(),
      handleEditItem: jest.fn(),
      handleItemCompletion: jest.fn(),
      handleSelectEditItem: jest.fn(),
    };

    const component = shallow(<App {...props} />);

    expect(component).toHaveLength(1);
  });
});
