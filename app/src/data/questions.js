//Images
import Watch from './../images/questions/Watch.jpg';
import NotClock from './../images/questions/NotClock.jpg';
import LightSwitch from './../images/questions/LightSwitch.jpg';
import Lights from './../images/questions/Lights.jpg';
import Cup from './../images/questions/Cup.jpg';
import Basket from './../images/questions/Basket.jpg';

export default [
    {
        id: 0,
        p: "Question One: Which one of these is the clock?",
        img1: Watch,
        img1_title: "Watch",
        img2: NotClock,
        img2_title: "Not Clock",
        results: [
            {
                id:0,
                p: "Off to a good start, or are you a good liar?",
                button: "Time for Question Two"
            },
            {
                id:1,
                p: "Did you hit your head? Perhaps your memory has been affected. Here's your second chance.",
                button: "Time for Question Two"
            }
        ],
        
    },
    {
        id: 1,
        p: "Question Two: Which one of these is the light switch?",
        img1: LightSwitch,
        img1_title: "Light Switch",
        img2: Lights,
        img2_title: "Lights",
        results: [
            {
                id:0,
                p: "Hmmm, perhaps you failed the mission after all. Your last chance to prove your identity. . . On to Question Three.",
                button: "Time for Question Three"
            },
            {
                id:1,
                p: "You remember, or a lucky guess?",
                button: "Time for Question Three"
            }
        ],
        
    },
    {
        id: 2,
        p: "Question Three: Which one of these is a basket?",
        img1: Cup,
        img1_title: "Cup",
        img2: Basket,
        img2_title: "Basket",
        results: [
            {
                id:0,
                p: "That’s not what baskets look like in our world. I can't trust that it's really you, although I'd hoped for the best. If it *is* really you, you know where the portal to our home dimension is. You have 5 minutes before we destroy the Dimensional Terminal. I hope it's really you. . .",
                button: "Back away from the console."
            },
            {
                id:1,
                p: "Hopefully, it’s really you. But I can't risk it. You could be my colleague's alternate. If it *is* really you, you know where the portal to our home dimension is. You have 5 minutes before we destroy the Dimensional Terminal. ",
                button: "Back away from the console."
            }
        ],
        
    },
]