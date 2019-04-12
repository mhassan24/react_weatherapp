import React from "react"
import { Link } from "react-router-dom";
import history from '../history';
import 'antd/dist/antd.css';
import { Button , Input } from "antd";
import '../styles/header.css';

class Header extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			location: ""
		}
	}

	handleUpdate = (e) => {
		this.setState({
			location: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		document.getElementById('headerInput').value = '';
		var location = this.state.location; // cache state
		this.setState({
			location: ''
		}); // reset state		
		history.push('/forecast/' + location);
	}

	handleEnter = (e) => {
		if (e.charCode === 13) {
			this.handleSubmit(e);
		}
	}

	render() {

		return (

			<div className="container">

			  <Link to="/">
				<h2 className="main-nav">Weather App</h2>
				</Link>

				<div className="example-input">
				<Input type="text" placeholder="Karachi, Pakistan" onChange={this.handleUpdate} onKeyPress={this.handleEnter} id="headerInput" />
				<br/><br/>
				<Button type="primary" onClick={this.handleSubmit}>Get Weather</Button>
				</div>
			</div>
		)
	}

}



export default Header