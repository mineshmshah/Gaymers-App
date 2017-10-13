import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions/index';

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

let InitializeFromStateForm = props => {


	
	const {handleSubmit, pristine, reset, submitting} = props;


	return (
		<form onSubmit={handleSubmit}>

			<div>
				<label>Full Name</label>
				<div>
					<Field
						name="name"
						component="input"
						type="text"
						placeholder="First Name"
					/>
				</div>
			</div>
			<div>
				<label>Avatar</label>
				<div>
				</div>
			</div>
			<div>
				<label>E-mail</label>
				<div>
					<Field
						name="email"
						component="input"
						type="text"
						placeholder="Last Name"
					/>
				</div>
			</div>
			<div>
				<label>Bio</label>
				<div>
					<Field name="avatar" component="textarea"/>
				</div>
			</div>
			<div>
				<button type="submit" disabled={pristine || submitting}>
						Submit
				</button>
				<button type="button" disabled={pristine || submitting} onClick={reset}>
						Undo Changes
				</button>
			</div>
		</form>
	);
};



// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeFromStateForm = reduxForm({
	form: 'initializeFromState' // a unique identifier for this form
})(InitializeFromStateForm);

// You have to connect() to any reducers that you wish to connect to yourself
InitializeFromStateForm = connect(
	state => ({
		auth:state.auth,
		initialValues: state.auth // pull initial values from account reducer
	}),
	{ actions } // bind account loading action creator
)(InitializeFromStateForm);

export default InitializeFromStateForm;

