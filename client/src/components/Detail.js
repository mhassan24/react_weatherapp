import React from 'react';
import getDate from '../utils/getDate.js';
import tempConverter from '../utils/tempConverter.js';

let Detail = (props) => {

	console.log(props.forecast);
	// {props.forecast.list.map(function (day, index) {						
	// 	var icon = day.weather[0].icon;
	// 	console.log(icon)

	var icon = props.forecast.list[props.id].weather[0].icon;
	var icon1 = props.forecast.list[1].weather[0].icon;
	var icon2 = props.forecast.list[2].weather[0].icon;
	var icon3 = props.forecast.list[3].weather[0].icon;
	var icon4 = props.forecast.list[4].weather[0].icon;
	// var icon5 = props.forecast.list[5].weather[0].icon;
	// var icon6 = props.forecast.list[6].weather[0].icon;

	return (
		<div className="container text-center"><br/>
			{/* <div className="detail-location-header">{props.forecast.city.name + ', ' + props.forecast.city.country}</div>			 */}
			<div className="date-text">{getDate(props.id)}</div>

			{/* <div className="description-text">
			<img style={{ width: "100px" }} src={`http://openweathermap.org/img/w/${icon}.png`} />
				<div>Hourly: {props.forecast.list[props.id].dt_txt}</div>
				<div>{props.forecast.list[props.id].weather[0].description}</div>
				<div>min temp: {tempConverter(props.forecast.list[props.id].main.temp_min)}</div>
				<div>max temp: {tempConverter(props.forecast.list[props.id].main.temp_max)}</div>
			</div> */}

			<div className="description-text">
			<img style={{ width: "100px" }} src={`http://openweathermap.org/img/w/${icon1}.png`} />
				<div>Hourly: {props.forecast.list[1].dt_txt}</div>
				<div>{props.forecast.list[1].weather[0].description}</div>
				<div>Low temp: {tempConverter(props.forecast.list[1].main.temp_min)}</div>
				<div>High temp: {tempConverter(props.forecast.list[1].main.temp_max)}</div>
			</div>

			<div className="description-text">
			<img style={{ width: "100px" }} src={`http://openweathermap.org/img/w/${icon2}.png`} />
				<div>Hourly: {props.forecast.list[2].dt_txt}</div>
				<div>{props.forecast.list[2].weather[0].description}</div>
				<div>Low temp: {tempConverter(props.forecast.list[2].main.temp_min)}</div>
				<div>High temp: {tempConverter(props.forecast.list[2].main.temp_max)}</div>
			</div>

			<div className="description-text">
			<img style={{ width: "100px" }} src={`http://openweathermap.org/img/w/${icon3}.png`} />
				<div>Hourly: {props.forecast.list[3].dt_txt}</div>
				<div>{props.forecast.list[3].weather[0].description}</div>
				<div>Low temp: {tempConverter(props.forecast.list[3].main.temp_min)}</div>
				<div>High temp: {tempConverter(props.forecast.list[3].main.temp_max)}</div>
			</div>


			<div className="description-text">
			<img style={{ width: "100px" }} src={`http://openweathermap.org/img/w/${icon4}.png`} />
				<div>Hourly: {props.forecast.list[4].dt_txt}</div>
				<div>{props.forecast.list[4].weather[0].description}</div>
				<div>Low temp: {tempConverter(props.forecast.list[4].main.temp_min)}</div>
				<div>High temp: {tempConverter(props.forecast.list[4].main.temp_max)}</div>
			</div>

			{/* <div className="description-text">
			<img style={{ width: "100px" }} src={`http://openweathermap.org/img/w/${icon5}.png`} />
				<div>Hourly: {props.forecast.list[5].dt_txt}</div>
				<div>{props.forecast.list[5].weather[0].description}</div>
				<div>Low temp: {tempConverter(props.forecast.list[5].main.temp_min)}</div>
				<div>High temp: {tempConverter(props.forecast.list[5].main.temp_max)}</div>
			</div>

			<div className="description-text">
			<img style={{ width: "100px" }} src={`http://openweathermap.org/img/w/${icon6}.png`} />
				<div>Hourly: {props.forecast.list[6].dt_txt}</div>
				<div>{props.forecast.list[6].weather[0].description}</div>
				<div>Low temp: {tempConverter(props.forecast.list[6].main.temp_min)}</div>
				<div>High temp: {tempConverter(props.forecast.list[6].main.temp_max)}</div>
			</div> */}

		</div>
	)
// })}					
}

export default Detail;