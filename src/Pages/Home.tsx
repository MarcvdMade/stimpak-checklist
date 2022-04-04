import React from "react";
import Lanes from "../components/Lanes";
import Questions from '../components/Questions';

export default function Home() {
    const [questionsOpen, setQuestionsOpen] = React.useState(
        window.localStorage.getItem('questionsAnswered') == 'yes' ? false : true
    );

    const closeModal = (isClosed: boolean) => {
        setQuestionsOpen(isClosed);
    }

    return (
        <div className="Home">
          { questionsOpen ? <Questions active={(isClosed: boolean) => closeModal(isClosed)}/> : <Lanes /> }
        </div>
    )
}

