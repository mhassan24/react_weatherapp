import React from 'react';
import Forecast from '../components/Forecast.js';
import fetchWeather  from '../utils/fetchWeather.js'

class ForecastContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            location: '',
            isLoading: true,
            weatherForecast: {}
        }
    }

componentDidMount() {
    fetchWeather(this.props.match.params.location,
         (weather) => {
            this.setState({
                location: this.props.match.params.location,
                isLoading: false,
                weatherForecast: weather
            });
        }
    )
}
componentWillReceiveProps(newProps) {
    fetchWeather(newProps.match.params.location,
         (weather) => {
            this.setState({
                location: newProps.match.params.location,
                isLoading: false,
                weatherForecast: weather
            });
        }
    )
}
render() {
    return (
        <Forecast isLoading={this.state.isLoading} weatherForecast={this.state.weatherForecast} location={this.state.location} />
    )
}
};

export default ForecastContainer