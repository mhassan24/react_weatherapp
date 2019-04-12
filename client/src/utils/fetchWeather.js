import axios from 'axios';

function fetchWeather (location, callback) {
	axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=92c716ad45b03948aeee52d1ad4d8b42&cnt=5`)
	// axios.get(`http://api.openweathermap.org/data/2.5/forecast/hourly?q=${location}&appid=42ebe59488860e8a6687b669f56198c9`)
	// axios.get(`http://localhost:5000/api/location/${location}`)
	.then(function(res) {
		console.log(res);
		
		return callback(res.data);
	})
	.catch(function(err) {
		return console.warn('Error in fetchWeather: ', err)
	});
} // return 5 day forecast

export default fetchWeather;