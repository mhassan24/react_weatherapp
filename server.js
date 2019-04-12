const api = require('./api.json');
const express = require ('express');
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// API calls
// app.get('/api/location/:location', (req, res) => {
// 	console.log(`from client ${req.params.location}`);
// 	res.send({ express: 'Hello From Express' });
// });
  	
const fetchWeather = async location => {
	const city = location ;
	const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${

	api.key
	}`;
	// console.log(url);
	
	try {
		const response = await axios.get(url);
		// console.log(response);
		
	} catch (error) {
		printError(error);
	}
};

// console.log(fetchWeather('Karachi'));


function printError(error) {
	console.error(error.message);
}

module.exports = {
	fetchWeather,
};


// if (process.env.NODE_ENV === 'production') {
	// Serve any static files
	app.use(express.static(path.join(__dirname, 'client/build')));
  
	// Handle React routing, return all requests to React app
	app.get('*', function(req, res) {
	  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
  // }

const port = process.env.PORT || 5000;

app.listen(port ,()=> console.log(`Server running on ${port}`));