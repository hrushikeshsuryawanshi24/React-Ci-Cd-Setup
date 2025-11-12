// import { fireEvent, render, screen } from '@testing-library/react';
// import App from '../App';
// import { test } from 'vitest';

// test('renders a component', () => {
//   render(<App />);
//   const headerElement = screen.getByText(/Vite \+ React/i);
//   expect(headerElement).toBeInTheDocument();
// });
// test('increments count on button click', () => {
//   render(<App />);
//   const buttonElement = screen.getByText(/count is: 0/i);
//   expect(buttonElement).toBeInTheDocument();

//   fireEvent.click(buttonElement);
//   expect(buttonElement).toHaveTextContent('/count is: 1/i');

//   fireEvent.click(buttonElement);
//   expect(buttonElement).toHaveTextContent('/count is: 2/i');
// })


import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import { test, expect } from 'vitest';

test('renders a component', () => {
  render(<App />);
  const headerElement = screen.getByText(/Vite \+ React/i);
  expect(headerElement).toBeInTheDocument();
});

test('increments count on button click', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /count is/i });
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent(/count is 1/i);

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent(/count is 2/i);
});