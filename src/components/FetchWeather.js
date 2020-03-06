import React from 'react';
import { connect } from 'react-redux';
//import fetchWeatherAction from '../redux/actions/fetchWeather';
import { fetchWeather } from '../redux/actions/appActions';

const FetchWeather = ({ fetchWeather }) => {
  return <button onClick={fetchWeather}>Fetch weather</button>;
};

const mapDispatchToProps = {
  fetchWeather,
}

export default connect(null, mapDispatchToProps)(FetchWeather);
