import React from "react";
import "../styles/Questions.css";
import Question from "./Question";

const questions = [
    {
        title: 'Hoelang staat de verwarming aan?',
        answers: [
            {
                answer: '12 uur of meer',
                points: 0,
            },
            {
                answer: '8 uur',
                points: 1,
            },
            {
                answer: '4 uur of minder',
                points: 2,
            }
        ]
    },
    {
        title: 'Welke soort verlichting is er in het gebouw?',
        answers: [
            {
                answer: 'Gloei lampen',
                points: 0,
            },
            {
                answer: 'Halogeen lampen',
                points: 1,
            },
            {
                answer: 'Led lampen',
                points: 2,
            }
        ]
    },
    {
        title: 'Hoelang hebben werknemers pauze?',
        answers: [
            {
                answer: 'Een half uur',
                points: 0,
            },
            {
                answer: 'Één uur',
                points: 1,
            },
            {
                answer: 'Twee uur',
                points: 2,
            },
            {
                answer: 'Drie uur',
                points: 3,
            }
        ]
    },
    {
        title: 'Hoeveel krijgen werknemers betaalt per uur?',
        answers: [
            {
                answer: '12 euro',
                points: 0,
            },
            {
                answer: '16 euro',
                points: 1,
            },
            {
                answer: '20 euro',
                points: 2,
            }
        ]
    },
    {
        title: 'Wat is de stemming op de werkvloer?',
        answers: [
            {
                answer: 'Heel erg stil',
                points: 0,
            },
            {
                answer: 'Formeel vriendelijk',
                points: 1,
            },
            {
                answer: 'Gezellig en open',
                points: 2,
            }
        ]
    },
    {
        title: 'Is er genoeg groen in de buurt?',
        answers: [
            {
                answer: 'Haast geen groen',
                points: 0,
            },
            {
                answer: 'Wat groen maar niet veel',
                points: 1,
            },
            {
                answer: 'Een park en veel groen in de buurt',
                points: 2,
            }
        ]
    },
    {
        title: 'Is er MVO expert😉 aanwezig?',
        answers: [
            {
                answer: 'Nee',
                points: 0,
            },
            {
                answer: 'Ja',
                points: 1,
            },
        ]
    },
]

let totalPoints = 0;

const Questions = (props: { active: any }) => {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    
    const acceptNextQuestion = (points: number) => {
        totalPoints = totalPoints + points;

        if (currentQuestion == questions.length - 1) {
            props.active(false);
            alert(`totaal behaalde punten: ${totalPoints}`);
            window.localStorage.setItem('questionsAnswered', 'yes');
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    return (
        <div className="questions-wrapper">
            <div className="questions-card">
                <Question question={questions[currentQuestion]} handleNextQuestion={(points: number) => acceptNextQuestion(points)} />
            </div>
        </div>
    )
}

export default Questions;