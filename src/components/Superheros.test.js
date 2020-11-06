import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Superheros from './Superheros';

describe('Superheroes component', () => {
  test('matches the superheroes snapshot', () => {
    const component = renderer.create(<Superheros />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Batwoman is in the list', () => {
    const { getByText } = render(<Superheros />);
    const batwoman = getByText(/batwoman/i);
    expect(batwoman).toBeInTheDocument();
  });
});
