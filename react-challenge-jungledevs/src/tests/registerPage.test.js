import { render, screen } from '@testing-library/react';
import App from '../App';

describe('register page component', () => {
  test('testing component RegisterHeader', () => {
    render(<App />);
    const linkRegistration = screen.getByText('Ready to get Started?');
    linkRegistration.click();
    const title = screen.getByText('Are you a parent without a nanny and looking to share?');
    expect(title).toBeInTheDocument();
  });
  
  test('testing component inputs', () => {
    render(<App />);
    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    const sendButton = screen.getByTestId('send-button');
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
  })
});