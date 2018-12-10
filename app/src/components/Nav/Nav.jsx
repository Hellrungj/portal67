import React, { Component } from 'react';
import Room from './Room';

// Images
import ContactRoom from './../../images/locations/Contact Room.jpg';
import Stairwell from './../../images/locations/Stairwell.jpg';
import MeditatingWoman from './../../images/locations/Meditating Woman.jpg';
import MazeOfDoors from './../../images/locations/Maze of Doors.jpg';
import HauntedAlternate from './../../images/locations/Haunted Alternate.jpg';
import DeadEnd from './../../images/locations/Dead End.jpg';
import AnotherTraveler from './../../images/locations/Another Traveler.jpg';
import AnotherHallway from './../../images/locations/Another Hallway.jpg';

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
            {
                id: 1,
                title: "Stairwell",
                p: "",
                img: Stairwell,
            },
            {
                id: 2,
                title: "Meditating Woman",
                p: "You have seen her before. In another reality, she might actually be you. Like you, she’s trapped here. Unlike you, she still has the stillness to meditate upon her fate.",
                img: MeditatingWoman,
            },
            {
                id: 3,
                title: "Maze of Doors",
                p: "Effects of time and space closing and folding in and on top of themselves, these doors tumble open before you with infinite possibilities.",
                img: MazeOfDoors,
            },
            {
                id: 4,
                title: "Haunted Alternate",
                p: "A ghost of a woman. There’s no way to know what dimension she traveled from. There’s no way to know if an alternate took her place, and no one who loves her understands they’re living with an impostor in their world. No one who loves her understands her existence now, fading in and out of reality, her very being spread thin across the universes.",
                img: HauntedAlternate,
            },
            {
                id: 5,
                title: "Dead End",
                p: "A portal that collapsed into a dimensional rift. Someone walled it shut to keep it from sucking in all of the matter from this universe.",
                img: DeadEnd,
            },
            {
                id: 6,
                title: "Another Traveler",
                p: "He’s probably you in an alternate place. It’s funny how differently or the same you can look depending on the reality. You don’t like the way he looks back at you. He doesn’t understand what he’s looking at.",
                img: AnotherTraveler,
            },
            {
                id: 7,
                title: "Another Hallway",
                p: "",
                img: AnotherHallway,
            },
        ], // Map Position Up Down Left Right // -1 means no positons
        map: [
            {
                id: 0,
                self: 0,
                positions: {
                        up: 1,
                        down: 3,
                        left: -1,
                        right: -1
                    }
            },
            {
                id: 1,
                self: 1,
                positions: {
                    up: 2,
                    down: 0,
                    left: -1,
                    right: -1
                    }        
            },
            {
                id: 2,
                self: 5,
                positions: {
                    up: -1,
                    down: 1,
                    left: -1,
                    right: -1
                    }
            },
            {
                id: 3,
                self: 3,
                positions: {
                    up: 0, 
                    down: -1, 
                    left: 4, 
                    right: -1
                    }
            },
            {
                id: 4,
                self: 1,
                positions: {
                    up: -1, 
                    down: 5, 
                    left: -1, 
                    right: -1
                    }
            },
            {
                id: 5,
                self: 7,
                positions: {
                    up: -1,
                    down: 7,
                    left: 6,
                    right: 8
                    }
            },
            {
                id: 6,
                self: 5,
                positions: {
                    up: -1, 
                    down: -1,
                    left: -1,
                    right: 5
                    }
            },
            {
                id: 7,
                self: 5,
                positions: {
                    up: -1,
                    down: 5,
                    left: -1,
                    right: -1
                    }
            },
            {
                id: 8,
                self: 7,
                positions: {
                    up: -1, 
                    down: 9,
                    left: 5,
                    right: 10
                    }
            },
            {
                id: 9,
                self: 7,
                positions: {
                    up: 8,
                    down: 13,
                    left: -1,
                    right: -1
                    }
            },
            {
                id: 10,
                self: 4,
                positions: {
                    up: 12,
                    down: 11,
                    left: 8,
                    right: -1
                    }
            },
            {
                id: 11,
                self: 7,
                positions: {
                    up: 10,
                    down: -1,
                    left: -1,
                    right: -1
                    }
            },
            {
                id: 12,
                self: 5,
                positions: {
                    up: -1,
                    down: 10,
                    left: -1,
                    right: -1
                    }
            },
            {
                id: 13,
                self: 7,
                positions: {
                    up: 9,
                    down: 14,
                    left: -1,
                    right: -1
                    }
            },
            {
                id: 14,
                self: 2,
                positions: {
                    up: 13,
                    down: -1,
                    left: 15,
                    right: -1
                    }
            },
            {
                id: 15,
                self: 3,
                positions: {
                    up: -1,
                    down: 16,
                    left: -1,
                    right: 14
                    }
            },
            {
                id: 16,
                self: 6,
                positions: {
                    up: 15,
                    down: -1,
                    left: -1,
                    right: "Fail State"
                    }
            },
        ], 
        currentRoom: 0
    }

    handleChoice = (id) => {
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