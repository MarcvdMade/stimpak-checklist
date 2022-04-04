import React from "react";
import "../styles/Questions.css";

interface Question {
    title: string,
    answers: Answer[]
}

interface Answer {
    answer: string,
    points: number
}


const Question = (props: { question: Question, handleNextQuestion: any }) => {
    const handleNextQuestion = (points: number) => {
        props.handleNextQuestion(points);
    }

    return (
        <div className="question-wrapper">
            <p className="question-title">{props.question.title}</p>
            <div className="question-answer-wrapper">
                { props.question.answers.map((item, index) => {
                    return (
                        <button key={index} onClick={() => handleNextQuestion(item.points)} className="answer-btn">{item.answer}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Question;