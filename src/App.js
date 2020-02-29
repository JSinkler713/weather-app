import React from 'react';
// connect with react-redux to store
import { connect } from 'react-redux';
import CurrentWeather from './components/CurrentWeather';
import appActions from './redux/actions/appActions';



function App(props) {
  return (
    <div>
      <h1>Weather App</h1>
      <CurrentWeather {...props} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    list: state.appReducer.testState
  };
}

const mapDispatchToProps = {
  ...appActions
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(App);
