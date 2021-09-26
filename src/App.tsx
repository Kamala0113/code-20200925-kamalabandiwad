import React, { useState, useEffect } from 'react';
import './App.css';
import CarsList from './components/CarsList';
import Header from './components/Header';
import axios from 'axios';
import Car from './interfaces';

function App() {
  const [carData, setCarData] = useState([]);
  const [carTypes, setCarTypes] = useState<string[]>([]);
  const [filterCarData, setFilterCarData] = useState([]);
  const [selectedFilter, updateFilterSelection] = useState(() => "all");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getCarTypes();
  }, []);

  useEffect(() => {
    const updateFilterData = () => {
      const updatedData = carData && carData.length > 0 ? carData.filter((carItem: Car) => {
        return carItem.type === selectedFilter
      }) : [];
      setFilterCarData(updatedData);
    }
    if (selectedFilter !== 'all') {
      updateFilterData();
    }
  }, [carData, selectedFilter]);

  const getData = () => {
    axios.get('../data/data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        setCarData(response.data);
      });
  }

  const getCarTypes = () => {
    axios.get('../data/carTypes.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        setCarTypes(response.data);
      });
  }

  return (
    <div className="App">
      <Header carTypes={carTypes} selectedFilter={selectedFilter} setFilterCarData={setFilterCarData} updateFilterSelection={updateFilterSelection} />
      <CarsList data={selectedFilter === 'all' ? carData : filterCarData} />
    </div>
  );
}

export default App;
