import React, { Component } from 'react';

//Question Data
import QuestionData from './../../data/questions'

//Sample Images
import Watch from './../../images/questions/Watch.jpg';
import NotClock from './../../images/questions/NotClock.jpg';

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
                p: "Question One:",
                img1: Watch,
                img1_title: "Watch",
                img2: NotClock,
                img2_title: "Not Clock",
                results: [
                    {
                        id:0,
                        p: "Right",
                        button: "Next"
                    },
                    {
                        id:1,
                        p: "Wrong",
                        button: "Next"
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