import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions/index';
import styled from 'styled-components';

// Styled Components
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: aliceblue;
`;

const FormLabel = styled.label`
 color:aliceblue;
 font-size: 12px;	
`

const Wrapper = styled.div`
  color: rgba(45,51,65,0.85);
  padding: 20px;
  font-family: sans-serif;
  max-width: 800px;
  margin: auto;
`;

const FormInputField = styled(Field).attrs({
	name: props => props.name,
	component: props => props.component,
	type: props => props.type,
	placeholder: props => props.placeholder,
    maxlength: props => props.maxlength,

})`
  font-size: 14px;
  box-shadow: inset 0 1px 3px #ddd;
  border-radius: 4px;
  height:${props => props.component==='textarea' ? '100px': '35px' };
  width:350px;
  border-style: none;
  padding:10px;
  margin: 10px 0;
  box-sizing: border-box;
  resize:none;
`;

const FormImageField = styled.img.attrs({
    src: props => props.src,
})`
  box-shadow: inset 0 1px 3px #ddd;
  border-radius: 4px;
  height:100px;
  width: 100px;
  border-style: none;
  margin: 10px 0;
  box-sizing: border-box;
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
			<Wrapper>
				<form onSubmit={handleSubmit}>
					<Title>Basic Info</Title>
					<div>
						<FormLabel>Full Name</FormLabel>
						<div>
							<FormInputField
								name="name"
								component="input"
								type="text"
								placeholder="First Name"
							/>
						</div>
					</div>
					<div>
						<FormLabel>Avatar</FormLabel>
						<div>
							<FormImageField src={this.renderAvatar()}/>
						</div>
					</div>
					<div>
						<FormLabel>E-mail</FormLabel>
						<div>
							<FormInputField
								name="email"
								component="input"
								placeholder="email"
							/>
						</div>
					</div>
					<div>
						<FormLabel>Bio</FormLabel>
						<div>
							<FormInputField name="bio" component="textarea" placeholder="Please enter a summary" maxlength="140"/>
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
			</Wrapper>

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
