import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';


class Form extends Component{
	renderRegisteredUser(){
		return '/profile'
	}
	render(){

		return(
			<div>
        This is a form
				<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
				<Field type='text' name='formTitle' component='input' />
				<button type='submit'>Submit</button>
				</form>
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
export default reduxForm ({
	form: 'welcomeForm'
})(Form);
