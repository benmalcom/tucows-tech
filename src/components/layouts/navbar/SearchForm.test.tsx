import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import SearchForm from './SearchForm';

test('SearchForm renders correctly and handles form submission', () => {
  // Mock the onSubmitSearch function
  const mockSubmitSearch = jest.fn();

  // Render the component
  render(<SearchForm onSubmitSearch={mockSubmitSearch} />);

  // Get form elements
  const form = screen.getByRole('form') as HTMLFormElement;
  const input = screen.getByPlaceholderText('Search') as HTMLInputElement;

  // Simulate form submission
  fireEvent.change(input, { target: { value: 'test-query' } });
  fireEvent.submit(form);

  // Check if the onSubmitSearch function was called with the correct argument
  expect(mockSubmitSearch).toHaveBeenCalledWith('test-query');
});
