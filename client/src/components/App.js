import React from 'react';
// Browser router tells react router how to behave - what components are to be visible by looking at URL
// Route deals with the rules and decides what components to show
import { BrowserRouter , Route } from 'react-router-dom';

import Header from './Header';


const Form = ()=><h2>Form</h2>;
const Profile = ()=><h2>Profile</h2>;
const Landing = ()=><h2>Landing</h2>;

//functional component
const App =() =>{
	return(
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<Route exact={true} path="/" component={Landing} />
					<Route  path="/welcome" component={Form} />
					<Route path="/profile" component={Profile}/>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;