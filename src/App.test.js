import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio sections, projects, and direct email contact', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
  expect(screen.getByText('English and Russian')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /weather finder/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /little lemon restaurant api/i })).toBeInTheDocument();

  const emailLink = screen.getByText('Email Nick');
  expect(emailLink.closest('a')).toHaveAttribute(
    'href',
    'mailto:nikitaburalek1@gmail.com?subject=Portfolio%20inquiry'
  );
});
