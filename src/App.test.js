import { render, screen } from '@testing-library/react';
import ROKY from './LGame';

test('renders learn react link', () => {
  render(<ROKY />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
