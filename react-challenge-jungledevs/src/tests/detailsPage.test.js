import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('testing DetailsPage component', () => {
  test('testing detailsInputs component', () => {
    render(<App />);
    const linkRegistration = screen.getByText('Ready to get Started?');
    linkRegistration.click();
    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    const sendButton = screen.getByTestId('send-button');
    fireEvent.change(nameInput, { target: { value: 'teste' } });
    fireEvent.change(emailInput, { target: { value: 'teste@teste.com' } });
    sendButton.click();
    const simpleFlat = screen.getByText('Choose to enter a simple flat amount');
    const sharedRates = screen.getByText('Choose shared rates');
    expect(simpleFlat).toBeInTheDocument();
    expect(sharedRates).toBeInTheDocument();
  });

  test('testing shared description component', () => {
    render(<App />);
    const title = screen.getByText('Shared Payments made simple');
    const bodyArticle = screen.getByTestId('body-article-shared-description');
    expect(title).toBeInTheDocument();
    expect(bodyArticle).toBeInTheDocument();
  });

  test('testing LongTerm component', () => {
    render(<App />);
    const title = screen.getByText('A framework built for the long term');
    const bodyArticle = screen.getByTestId('body-article-long-term')
    expect(title).toBeInTheDocument();
    expect(bodyArticle).toBeInTheDocument();
  });

  test('testing CommingSoon component', () => {
    render(<App />);
    const title = screen.getByText('Coming soon: Nanny Share Daily Diary!');
    const bodyArticle = screen.getByTestId('body-article-comming-soon');
    expect(title).toBeInTheDocument();
    expect(bodyArticle).toBeInTheDocument();
  });

  test('testing DetailPageFooter component', () => {
    render(<App />);
    const title = screen.getByText('Become a nanny share host');
    const createNannyButton = screen.getByTestId('create-nanny-button');
    const localNannyShare = screen.getByText('Or browse local nanny-shares');
    const socialNetworkIcons = screen.getAllByTestId('social-network-icon');
    expect(title).toBeInTheDocument();
    expect(createNannyButton).toBeInTheDocument();
    expect(socialNetworkIcons.length).toBe(3);
    expect(localNannyShare).toBeInTheDocument();
  });
});