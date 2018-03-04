import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';


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
        const {requestGames , fetchGames} = this.props;
        event.preventDefault();
        // we need to go fetch weather data
        requestGames();
        fetchGames(this.state.term);
        this.setState({term:'' })
    }
    renderContent(){

        if (!this.props.fetch){
            return <p>Loading</p>
        } else if (this.prop){
            if(this.prop.game){
                return <div>{this.prop.game.map(this.getGame)}</div>

            }
        }

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
                </form>
			</div>
		);
	}
}

const mapStateToProps = ({game,fetch}) => {
    return {game,fetch}
}

export default connect(mapStateToProps,actions)(AddGame);