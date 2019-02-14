import React, { Component } from 'react';

// Arrow Images
import Up from './../../images/arrow_up-24px.svg';
import Down from './../../images/arrow_down-24px.svg';
import Left from './../../images/arrow_left-24px.svg';
import Right from './../../images/arrow_right-24px.svg';

const mainImgStyle = {
    width: '600px',
    height: '400px'
};

const arrowImgStyle = {
    width: '50px',
    height: '50px'
};

class Room extends Component {
    state = { 
        img: this.props.room.img,
        p: this.props.room.p
    }
    render() { 
        let {up, down, left, right} = this.props.position.positions
        return ( 
            <div>
                <h1>{this.props.room.title}</h1>
                <p>{this.state.p}</p>
                <div>
                    {this.DisplayDirection(up,Up,0,"Up Arrow")}
                </div>
                {this.DisplayDirection(left,Left,1,"Left Arrow")}
                <img src={this.state.img} style={mainImgStyle} alt={this.props.room.title} />
                {this.DisplayDirection(right,Right,2,"Right Arrow")}
                <div>
                    {this.DisplayDirection(down,Down,3,"Down Arrow")}
                </div>
            </div>
        );
    }
    DisplayDirection = (value,img,type,alt_text) => {
        if (value !== "Fail State"){
            if (value === "Win State"){
                if (type === 1 && type === 2) {
                    return ( <a href="/Home"> <img src={img} style={arrowImgStyle}  alt={alt_text} /> </a> )
                } else {
                    return ( <a href="/Home"> <img src={img} style={arrowImgStyle}  alt={alt_text} /> </a> )
                }
            } 
            if (value !== -1){
                if (type === 1 && type === 2) {
                    return ( <img src={img} onClick={() => {this.props.onChoice(value)}} style={arrowImgStyle}  alt={alt_text} /> )
                } else {
                    return ( <img src={img} onClick={() => {this.props.onChoice(value)}} style={arrowImgStyle}  alt={alt_text} /> )
                }
            }
        } else {
            if (type === 1 && type === 2) {
                    return ( <a href="/End"> <img src={img} style={arrowImgStyle}  alt={alt_text}/> </a>)
                } else {
                    return ( <a href="/End"> <img src={img} style={arrowImgStyle}  alt={alt_text} /> </a> )
                }
            }
        }
    }

 
export default Room;