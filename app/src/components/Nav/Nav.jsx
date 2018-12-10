import React, { Component } from 'react';
import ContactRoom from './Contact Room.jpg';

const imgStyle = {
    width: '600px',
    height: '400px'
};

class Nav extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <img src={ContactRoom} style={imgStyle} alt="ContactRoom" />
                <p>Your colleague cuts the transmission. You had better hurry. Command won’t hesitate to kill you if it saves the mission.</p>
            </div> 
         );
    }
}
 
export default Nav;