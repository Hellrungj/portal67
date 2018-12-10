import React, { Component } from 'react';

class Result extends Component {
    state = { 
        p: this.props.result.p,
        button: this.props.result.button
    }
    render() { 
        return ( 
            <div className="result">
                <p>{this.state.p}</p>
                {this.goToNav()}
            </div>
        );
    }

    goToNav = () => {
        if (this.props.question.id !== 2){
            return (
                <button onClick={() => {this.props.onNextQuestion()}} >{this.state.button}</button>
            )
        } 
        else {
            return (
                <a href="/Nav"> <button>{this.state.button}</button>   </a>
            )
        }
    }
}
 
export default Result;