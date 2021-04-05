import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchLocation from './SearchLocation';

test('renders search input', () => {
  const { getByTestId } = render(<SearchLocation />);
  const linkElement = getByTestId('search-location');
  expect(linkElement).toBeTruthy();
});

test('fires change event on input value changing', () => {
  const { getByPlaceholderText } = render(<SearchLocation />);
  const searchInput = getByPlaceholderText('Enter a Location');
  fireEvent.change(searchInput, {
    target: { value: "new value" }
  });
  expect(searchInput.value).toBe('new value')
});
