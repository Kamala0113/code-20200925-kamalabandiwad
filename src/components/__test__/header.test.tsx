import ReactDOM from 'react-dom';
import Header from '../Header';
import { render, screen, cleanup } from '@testing-library/react';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
});

it('renders correctly', () => {
    const {getByTestId} = render(<Header />);
    expect(getByTestId('header')).toHaveTextContent('Car Catalogue');
});
