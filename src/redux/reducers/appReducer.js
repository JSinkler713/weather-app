import { combineReducers } from 'redux';
import { FETCH_WEATHER_SUCCESS } from '../actions/appActions';

const appReducer = (state = [], action) => {
   if (action.type === FETCH_WEATHER_SUCCESS) { 
     return action.payload;
   }
   else {
     return state
  }
}

export default combineReducers({
  appReducer,
});
