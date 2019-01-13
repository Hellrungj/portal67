import React, { Component } from 'react';
import Room from './Room';

// Sample Images
import ContactRoom from './../../images/locations/Contact Room.jpg';

//Question Data
import RoomData from './../../data/rooms'
import MapData from './../../data/map'

const getRoom = (rooms, id) => {
    let room = rooms.find((room) => {
        return room.id === id
    })
    return room
}

const getPosition = (map, id) => {
    let position = map.find((position) => {
        return position.id === id
    })
    return position
}

class Nav extends Component {
    state = { 
        rooms: [ 
            {
                id: 0,
                title: "Contact Room",
                p: "Your colleague cuts the transmission. You had better hurry. Command won’t hesitate to kill you if it saves the mission.",
                img: ContactRoom,
            },
        ], 
        map: [ 
            {
                id: 0,
                self: 0, // Int refer to back to rooms object
                positions: { // Int refer position id and -1 means no position 
                        up: 1,
                        down: 3,
                        left: -1,
                        right: -1
                    }
            },
        ], 
        currentRoom: 0 // Int refer to back to rooms object
    }

    componentDidMount() {
    // eslint-disable-next-line
        this.setState({
            rooms: RoomData,
            map: MapData,
            currentRoom: this.state.currentRoom
        })
        }

    handleChoice = (id) => {
    // eslint-disable-next-line
        this.setState({ currentResult: this.state.currentRoom = id })
    }

    render() { 
        return (
            <div>
                {this.GetCurrentRoom()}
            </div>    
        );
    }

    GetCurrentRoom = () => {
        let position = getPosition(this.state.map, this.state.currentRoom)
        let room = getRoom(this.state.rooms, position.self)
        return (
            <Room key={position.id} onChoice={this.handleChoice} room={room} position={position}/>
        )
    }
}
 
export default Nav;