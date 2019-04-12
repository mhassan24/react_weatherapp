import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Header from "./components/header";
import ForecastContainer from './containers/forecasetContainer';
import DetailContainer from './containers/DetailContainer';
import history from './history'

import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCNdyWgZev8KSVzlRXyGjqSVOCr9Fu0GRo",
    authDomain: "weather-app-b2374.firebaseapp.com",
    databaseURL: "https://weather-app-b2374.firebaseio.com",
    projectId: "weather-app-b2374",
    storageBucket: "weather-app-b2374.appspot.com",
    messagingSenderId: "102340636259"
};
  firebase.initializeApp(config);

class App extends Component {

  render() {
    return (
      <Router history={history}>
      <div className="App">
        <Header/>
        <Route path='/forecast/:location' component={ForecastContainer} />
        <Route path='/detail' component={DetailContainer} />
     </div>
    </Router>
    );
  }
}

export default App;
