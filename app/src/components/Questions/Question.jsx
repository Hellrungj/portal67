import React, { Component } from 'react';

const imgStyle = {
    width: '340px',
    height: '254px'
};

class Question extends Component {
    state = { 
        p: this.props.question.p,
        img1: this.props.question.img1,
        img2: this.props.question.img2
    }

    render() { 
        return ( 

        <div className="Question">
            <p> {this.state.p} </p>
            <img src={this.state.img1} onClick={() => {this.props.onChoice(0)}} style={imgStyle}  alt="Basket" /> 
            <img src={this.state.img2} onClick={() => {this.props.onChoice(1)}} style={imgStyle}  alt="Basket" />
        </div>
         );
    }
}
 
export default Question;