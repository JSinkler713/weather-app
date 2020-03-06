import React from 'react';
// connect with react-redux to store
import { connect } from 'react-redux';
import FetchWeather from './components/FetchWeather';



function App(props) {
  return (
    <div>
      <h1>Weather App</h1>
      <FetchWeather {...props} />
    </div>
  );
}


export default  App;
