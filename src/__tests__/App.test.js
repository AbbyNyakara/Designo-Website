import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';
import App from '../App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

test("Renders the full app", async() => {
  render(<App />, {wrapper: BrowserRouter})
  const user = userEvent.setup();

  // Page content in default route
  expect(screen.getByText(/Award-winning custom designs/i)).toBeInTheDocument()

  // Page content after navigating
  await user.click(screen.getByText(/our company/i))
  expect(screen.getByText(/About Us/i)).toBeInTheDocument();
})