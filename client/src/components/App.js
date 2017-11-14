import React, { Component } from 'react';
import { connect } from 'react-redux';
// Browser router tells react router how to behave - what components are to be visible by looking at URL
// Route deals with the rules and decides what components to show
import { BrowserRouter , Route } from 'react-router-dom';
import * as actions  from '../actions';
import Header from './Header';
import Form from './Form'


const Profile = ()=><h2>Profile</h2>;
const Landing = ()=><h2>Landing</h2>;

//functional component

class App extends Component{
	componentDidMount(){
		this.props.fetchUser();
	}
	render(){
		return(
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route  exact path="/welcome" component={Form} />
						<Route path="/profile" component={Profile}/>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}


export default connect(null,actions)(App);