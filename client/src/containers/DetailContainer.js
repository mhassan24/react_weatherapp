import React from 'react';
import Detail from './../components/Detail';

class DetailContainer extends React.Component{

	componentDidMount() {		
		if (this.props.location.state === null) {
			this.props.history.push('/');
		}
    }
    
	render() {
		if (this.props.location.state) {
			return (
				<Detail id={this.props.location.state.id} forecast={this.props.location.state.forecast} />
			);
		}	else { 
			return (
				<div></div>
			)
		}			
	}
};

export default DetailContainer