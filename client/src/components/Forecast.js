import React from 'react';
import { Link } from "react-router-dom"
import  getDate from '../utils/getDate.js';
import tempConverter from '../utils/tempConverter.js';
import '../styles/forecast.css';

let key = 0;

let Forecast = (props) => {
	
	function uniqueKey () {
		key++;		
		return key;
	}	
	
	if (props.isLoading) {
		return (
			<div className="loading-message">
				<svg width='158px' height='158px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="uil-default"><rect x="0" y="0" width="100" height="100" fill="none" className="bk"></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(0 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(30 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.08333333333333333s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(60 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.16666666666666666s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(90 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.25s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(120 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.3333333333333333s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(150 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.4166666666666667s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(180 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.5s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(210 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.5833333333333334s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(240 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.6666666666666666s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(270 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.75s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(300 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.8333333333333334s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(330 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.9166666666666666s' repeatCount='indefinite'/></rect></svg>
				<div className="hidden-xs">Loading.</div>
				<div className="sub-loading">Please be patient. Due to API limitations, requests must be routed through a proxy.</div>
			</div>
		)
	} else if (props.weatherForecast.cod === '404') {
		return (
			<div className="container text-center">
				<div className="error-message">
					An error occurred. Please check that your input is correct.
				</div>
			</div>
		)
	} else {
		return (
			<div className="container">
				<div className="row text-center">
					<div className="col-xs-12 location-header">{props.weatherForecast.city.name + ', ' + props.weatherForecast.city.country}</div>
					<div className="col-xs-12 sub-header">Select a day</div>					
				</div>
				<div className="row">					

				{console.log(props.weatherForecast)}
					{props.weatherForecast.list.map(function (day, index) {						
						var icon = day.weather[0].icon;
			 
				 return (
							<div key={uniqueKey()} className="col-xs-12 col-sm-4 col-md-3 text-center col-style">
								<Link to={{
							 	  pathname: '/detail',
								  state: {
							 		  id: index,
									  forecast: props.weatherForecast
									}									  	
								}}>

								  {/* <i className={'i-styling owf ' + 'owf-' + statusCode}></i> */}
								  <img style={{width:"100px"}} src={`http://openweathermap.org/img/w/${icon}.png`}/>
							</Link>
							  <div className="date-text">{getDate(index)}</div>
							  {/* <div className="date-text">{console.log(getDate(index))}</div> */}
							  <div>High temp: {tempConverter(day.main.temp_max)}</div>
							  <div>low temp: {tempConverter(day.main.temp_min)}</div>

							</div>	
						)
						
					})}					
				</div>
			</div>			
		)
	}
}

export default Forecast;