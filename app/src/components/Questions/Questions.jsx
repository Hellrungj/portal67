import React, { Component } from 'react';

//Question Data
import QuestionData from './../../data/questions'

//Sample Images
import Watch from './../../images/questions/Watch.jpg';
import NotClock from './../../images/questions/NotClock.jpg';

//Components
import Question from './Question'
import Result from './Result'

import './Questions.css'

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
        ],
        currentQuestion: 0,
        currentResult: -1
     }

     componentDidMount() {
        // eslint-disable-next-line
        this.setState({
            questions: QuestionData,
            currentQuestion: this.state.currentQuestion,
            currentResult: this.state.currentResult
        })
        }

    handleChoice = (id) => {
    // eslint-disable-next-line
        this.setState({ currentResult: this.state.currentResult = id })
    }
    
    handleNextQuestion = () => {
        this.setState({ currentQuestion: this.state.currentQuestion + 1 })
        this.setState({ currentResult: -1 })
    }

    render() { 
        return (
            <div>
                {this.GetCurrentQuestion()}
                {this.GetCurrentResult()}
            </div>
        );
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