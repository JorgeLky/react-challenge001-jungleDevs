import { render, screen } from '@testing-library/react';
import App from '../App';

describe('initial page component', () => {
  test('testing component TopMenu', () => {
    render(<App />);
    const button = screen.getByText('Become a Nanny Share Host');
    const nannyShareLink = screen.getByText('Create Your Nanny Share');
    const babyIcon = screen.getByTestId('baby-icon');
    expect(nannyShareLink).toBeInTheDocument()
    expect(button).toBeInTheDocument();
    expect(babyIcon).toBeInTheDocument();
  });
  
  test('testing component AboutArticle', () => {
    render(<App />);
    const title = screen.getByText('Easily create or join a local nanny share with Hapu');
    const manageContainer = screen.getByTestId('manage-nanny');
    const playIcon = screen.getByTestId('play-icon');
    expect(playIcon).toBeInTheDocument();
    expect(manageContainer).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('testing component NannyAvailable', () => {
    render(<App />);
    const nannyIcon = screen.getByTestId('nanny-representation');
    expect(nannyIcon).toBeInTheDocument();
  });

  test('testing component description component', () => {
    render(<App />);
    const title = screen.getByText('Share your Home, nanny and costs');
    const paragraphDescription = screen.getByTestId('paragraph-description');
    const linkRegistration = screen.getByText('Ready to get Started?');
    expect(linkRegistration).toBeInTheDocument();
    expect(paragraphDescription).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});