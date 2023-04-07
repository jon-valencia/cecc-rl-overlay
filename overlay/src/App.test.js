import { render, screen } from '@testing-library/react';
import Overlay from 'pages/Overlay';

test('renders learn react link', () => {
  render(<Overlay />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
