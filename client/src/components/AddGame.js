import React, { Component } from 'react';
import { connect } from 'react-redux';

import {addGame} from '../actions';

class AddGame extends Component{
    constructor(props){
        super(props);
        this.state = {term: ''}
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange(event){
        this.setState({term:event.target.value})
    }
    onFormSubmit(event){
        event.preventDefault();
        // we need to go fetch weather data
        this.props.addGame(this.state.term);
        this.setState({term:'' })
    }

    styleCSS = {
        padding:'20px'
    };

	render(){
		return(
			<div style={this.styleCSS}>
                <form onSubmit={this.onFormSubmit}>
                    <input
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                    <button type="submit">
                        Search
                    </button>
                </form>
			</div>
		);
	}
}

export default connect(null,{addGame})(AddGame);