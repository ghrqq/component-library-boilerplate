
import React from 'react';
import { render } from '@testing-library/react';
import HelloWorld from './HelloWorld';
describe('HelloWorld Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<HelloWorld />);
    expect(asFragment()).toMatchSnapshot();
  });
});
