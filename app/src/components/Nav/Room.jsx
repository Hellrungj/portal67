import React, { Component } from 'react';

// Images
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
                {this.DisplayDirection(up,Up,0)}
                {this.DisplayDirection(left,Left,1)}
                <img src={this.state.img} style={mainImgStyle} alt={this.props.room.title} />
                {this.DisplayDirection(right,Right,2)}
                {this.DisplayDirection(down,Down,3)}
                <p>{this.state.p}</p>
            </div>
        );
    }
    DisplayDirection = (value,img,type) => {
        if (value !== "Fail State"){
            if (value !== -1){
                if (type === 1 && type === 2) {
                    return (
                        <img src={img} onClick={() => {this.props.onChoice(value)}} style={arrowImgStyle}  alt="Basket" />
                    )
                } else {
                    return (
                        <div>
                            <img src={img} onClick={() => {this.props.onChoice(value)}} style={arrowImgStyle}  alt="Basket" />
                        </div>
                    )
                }
            }
        } else {
            if (type === 1 && type === 2) {
                    return (
                        <a href="/End">
                            <img src={img} style={arrowImgStyle}  alt="Basket" />
                        </a>
                    )
                } else {
                    return (
                        <div>
                            <a href="/End">
                                <img src={img} style={arrowImgStyle}  alt="Basket" />
                            </a>
                        </div>
                    )
                }
            }
        }
    }

 
export default Room;