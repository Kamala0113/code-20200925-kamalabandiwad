import React, { useState, useEffect } from 'react';
import './App.css';
import CarsList from './components/CarsList';
import Header from './components/Header';
import axios from 'axios';

function App() {
  const [carData, setCarData] = useState([]);
  const getData=()=>{
    axios.get('../data/data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       } 
    }
    )
      .then(function(response){
        setCarData(response.data)
      });
  }
  useEffect(()=>{
    getData();
  },[]);

  return (
    <div className="App">
      <Header />
      <CarsList data={carData}/>
    </div>
  );
}

export default App;
