import {fetchWeatherPending, fetchWeatherSuccess, fetchWeatherError} from './appActions';

function fetchWeather() {
    return dispatch => {
        dispatch(fetchWeatherPending());
        fetch('api.openweathermap.org/data/2.5/weather?q=marin&appid=394feb0696d7821f8fefccc54a73f174')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                console.log(res.error)
                throw(res.error);
            }
            dispatch(fetchWeatherSuccess(res.weather));
            return res.weather;
        })
        .catch(error => {
            dispatch(fetchWeatherError(error));
        })
    }
}

export default fetchWeather;
