import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import ProductsTable from './ProductsTable';

const mockProducts = [
  { id: 1, quantity: 10, product: 'Product A', total: 100, serial: 'ABC123' },
  { id: 2, quantity: 15, product: 'Product B', total: 150, serial: 'DEF456' },
  // Add more sample products if needed
];

test('ProductsTable renders correctly and handles checkbox selection', () => {
  // Mock the onSelect function
  const mockOnSelect = jest.fn();

  // Render the component
  render(
    <ProductsTable
      products={mockProducts}
      onSelect={mockOnSelect}
      isSelectable={true}
    />,
  );

  // Check if checkboxes are rendered for each product
  const checkboxes = screen.getAllByRole('checkbox');
  expect(checkboxes).toHaveLength(mockProducts.length + 1); // +1 for the select all checkbox

  // Simulate selecting/deselecting individual checkboxes
  fireEvent.click(checkboxes[1]); // Select the first product
  fireEvent.click(checkboxes[2]); // Deselect the second product

  // Check if the onSelect function is called with the correct number of selected products
  expect(mockOnSelect).toHaveBeenCalledWith(1);

  // Simulate selecting/deselecting the "Select All" checkbox
  fireEvent.click(checkboxes[0]); // Select all
  fireEvent.click(checkboxes[0]); // Deselect all

  // Check if the onSelect function is called with the correct number of selected products after selecting all
  expect(mockOnSelect).toHaveBeenCalledWith(0);

  // Optionally, you can test other aspects of the component, such as the presence of certain elements
  expect(screen.getByText('Product A')).toBeInTheDocument();
  expect(screen.getByText('Product B')).toBeInTheDocument();
});
