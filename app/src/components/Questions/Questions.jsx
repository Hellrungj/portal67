import React, { Component } from 'react';

//Images
import Watch from './../../images/questions/Watch.jpg';
import NotClock from './../../images/questions/NotClock.jpg';
import LightSwitch from './../../images/questions/LightSwitch.jpg';
import Lights from './../../images/questions/Lights.jpg';
import Cup from './../../images/questions/Cup.jpg';
import Basket from './../../images/questions/Basket.jpg';

//Components
import Question from './Question'
import Result from './Result'

const getQuestion = (questions, id) => {
    let question = questions.find((question) => {
        return question.id === id
    })
    return question
}

class Questions extends Component {
    state = { 
        questions: [
            {
                id: 0,
                p: "Question One: Which one of these is the clock?",
                img1: Watch,
                img2: NotClock,
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
                img2: Lights,
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
                img2: Basket,
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
        ],
        currentQuestion: 0,
        currentResult: -1
     }

    handleChoice = (id) => {
        this.setState({ currentResult: this.state.currentResult = id })
    }
    
    handleNextQuestion = () => {
        this.setState({ currentQuestion: this.state.currentQuestion + 1 })
        this.setState({ currentResult: -1 })
    }

    render() { 
        return (
            <div>
                {this.Intro()}
                {this.GetCurrentQuestion()}
                {this.GetCurrentResult()}
            </div>
        );
    }

    Intro = () => {
        if (this.state.currentQuestion === 0 && this.state.currentResult === -1){
            return (
                <div className="INTRO">   
                    <p> So, you *did* make it out. </p> 
                    <p> Before I let you through, I must make sure you were not compromised. </p>
                    <p> You know the drill. Nothing personal. </p>
                    <p> Step up to the terminal. </p>
                    <p> INITIATE PROTOCOL: Cleanse 3824-B </p>
                </div>
            )
        }
    }

    GetCurrentResult = () => {
        let question = getQuestion(this.state.questions, this.state.currentQuestion)
        if (this.state.currentResult !== -1){
            let result = question.results.find((result) => {
                return result.id === this.state.currentResult
            })
            return (
                <Result key={result.id} onNextQuestion={this.handleNextQuestion} result={result} question={question}/>
            )
        }
    }
    
    GetCurrentQuestion = () => {
        let question = getQuestion(this.state.questions, this.state.currentQuestion)
        if (this.state.currentResult === -1){
            return (
                <Question key={question.id} onChoice={this.handleChoice} question={question}/>
            )
        }
    }
}
 
export default Questions;