import React from 'react';
// connect with react-redux to store
import { connect } from 'react-redux';
import CurrentWeather from './components/CurrentWeather';



function App(props) {
  return (
    <div>
      <h1>Weather App</h1>
      <CurrentWeather {...props} />
    </div>
  );
}

export default App;
