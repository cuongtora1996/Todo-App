import React from 'react';
import TodoItem from './TodoItem';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer
    .create(<TodoItem item={{text: "Item 1", isCompleted:false }}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
