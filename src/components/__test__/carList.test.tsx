import ReactDOM from 'react-dom';
import CarsList from '../CarsList';
import carData from '../../../public/data/data.json';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CarsList data={carData} />, div);
});

