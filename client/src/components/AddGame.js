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
    renderContent(){
        const { isFetching } = this.props
        if (isFetching){
            return <p>Loading</p>
        } else{
            return <div>{this.props.game.map(this.getGame)}</div>
        }
        // return <div>{this.props.game.map(this.getGame)}</div>

    }
    styleCSS = {
        padding:'20px'
    };

    getGame(data){
        return(
            <div>
            <pre key={data.id}>{data.name}</pre>
            <img src ={data.cover.url} alt = "" />
            </div>
        )
    }

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
                    {this.renderContent()}
                     <div>{this.props.game.map(this.getGame)}</div>

                </form>
			</div>
		);
	}
}

function mapStateToProps({ game }){
    return { game }
}

export default connect(mapStateToProps,{addGame})(AddGame);