import { ADD_ITEM, DELETE_ITEM, GET_WEATHER } from '../actionTypes';

const redux_add = (todo) => ({
  type: ADD_ITEM,
  payload: todo
})

const redux_delete = (id) => ({
  type: DELETE_ITEM,
  payload: id
})

// get weather actions
const redux_get_weather = ()=> ({
  type: GET_WEATHER,
  //will change this to be city name most likely
  payload: null
})






const appActions = {
  redux_add,
  redux_delete,
  redux_get_weather,
}

export default appActions;
