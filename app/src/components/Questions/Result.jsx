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
                <button onClick={() => {this.props.onNextQuestion()}} >{this.state.button}</button>
            </div>
        );
    }
}
 
export default Result;