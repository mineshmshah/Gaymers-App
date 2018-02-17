import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions/index';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const NewField = styled(Field).attrs({
	name: props => props.name,
	component: props => props.component,
	type: props => props.type,
	placeholder: props => props.placeholder,
})`
  font-size: 14px;
  color: rgba(45,51,65,0.85);
  box-shadow: inset 0 1px 3px #ddd;
  border-radius: 4px;
  height:35px;
  width:350px;
  border-style: none;
  padding:10px;
  
`;

class InitializeFromStateForm extends Component {

	renderAvatar(){
		// if(!this.props.initialValues){
		// 	 return;
		// } else{
		// 	return this.props.initialValues.avatar;
		// }
		switch(this.props.auth){
		case null:
			return;
		case false:
			return;
		default:
			return this.props.auth.avatar;
		}
	}

	componentWillMount(){
	}

	render(){
		const {handleSubmit, pristine, reset, submitting } = this.props;
		return (

			<form onSubmit={handleSubmit}>
				<Title>HELLO</Title>
                <div>
                    <label>New Style Full Name</label>
                    <div>
                        <NewField
                            name="name"
                            component="input"
                            type="text"
                            placeholder="First Name"
                        />
                    </div>
                </div>
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
						<img src={this.renderAvatar()}/>
					</div>
				</div>
				<div>
					<label>E-mail</label>
					<div>
						<Field
							name="avatar"
							component="img"


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
	}
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
//You need to pass the initialValues props into the form. To do that wrap the form with the connect function. See Initialize From State in the documentation.
export default connect(
	state => ({
		auth:state.auth,
		initialValues: state.auth // pull initial values from account reducer
	}),
	{ actions } // bind account loading action creator
)(
	reduxForm({
		form: 'initializeFromState', // a unique identifier for this form
		enableReinitialize : true
	})(InitializeFromStateForm)
);






// // Decorate with reduxForm(). It will read the initialValues prop provided by connect()
// InitializeFromStateForm = reduxForm({
//   form: 'initializeFromState', // a unique identifier for this form
//   enableReinitialize : true
// })(InitializeFromStateForm);
//
// // You have to connect() to any reducers that you wish to connect to yourself
// InitializeFromStateForm = connect(
//   state => ({
//     auth:state.auth,
//     initialValues: state.auth // pull initial values from account reducer
//   }),
//   { actions } // bind account loading action creator
// )(InitializeFromStateForm);
//
// export default InitializeFromStateForm;
//
