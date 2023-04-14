import { render, screen } from '@testing-library/react';

import App from 'App';

test('renders hello text', () => {
  render(<App />);
  const linkElement = screen.getByText(/hey! i am your new react project!/i);
  expect(linkElement).toBeInTheDocument();
});
