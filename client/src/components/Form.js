import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Form extends Component{
	renderRegisteredUser(){
		return '/profile'
	}
	render(){

		return(
			<div>
        This is a form
				<Link
				to={this.renderRegisteredUser()}
				className="btn btn-primary">
					Submit
				</Link>
			</div>

		);
	}
}
function mapStateToProps({auth}){
	return {auth};
}
export default Form;
