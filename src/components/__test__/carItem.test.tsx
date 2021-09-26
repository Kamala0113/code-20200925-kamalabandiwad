import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, render, screen } from '@testing-library/react';
import CarItem from '../CarItem';

afterEach(()=>{
  cleanup();
})

it('renders without crashing', () => {
  const data = {
    "id": 1,
    "name": "Santro",
    "type": "Hatchback",
    "img-link": "Santro.png"
  }
  const div = document.createElement('div');
  ReactDOM.render(<CarItem data={data} />, div);
});

it('Contains image tag', () => {
  const data = {
    "id": 1,
    "name": "Santro",
    "type": "Hatchback",
    "img-link": "Santro.png"
  }
  render(<CarItem data={data} />)
  const carItemElement = screen.getByTestId('carItem-1');
  expect(carItemElement).toBeInTheDocument;
  expect(carItemElement).toHaveTextContent('Santro');
})