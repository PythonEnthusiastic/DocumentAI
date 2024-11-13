import { useState } from "react"
import Message from "./Message.jsx";
import "../styles/questionBox.css"

const QuestionBox = ({ addMessage }) => {
    const [question, setQuestion] = useState("");

    const handleQuestion = (e) => {
        e.preventDefault()
        setQuestion(`${e.target.value}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        addMessage(<Message author="User" message={question} />)
    }

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            handleSubmit(e)
        }
    }

    return (
        <form onSubmit={handleSubmit} onKeyDown={handleKey} id="question-box">
           <textarea id="question" placeholder="Message DocumentAI"  onChange={(e) => handleQuestion(e)} />
           {/* <input type="submit" className="submitButton" /> */}
        </form>
    )
}

export default QuestionBox;