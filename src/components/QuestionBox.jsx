import { useState } from "react"
import "../styles/questionBox.css"

import { useContext } from "react";
import { DragAndDropContext } from "./DragAndDropContext";

import Picture from "./Picture";

import QueryModel from "../utils/queryModel.js";

const QuestionBox = ({ addMessage }) => {
    const [question, setQuestion] = useState("");
    const { file } = useContext(DragAndDropContext);

    const displayPicture = () => {
        if (file) {
            console.log(file.type)
            return <Picture file={file.type} />
        }

        return <></>
    }

    const handleQuestion = (e) => {
        e.preventDefault()
        setQuestion(`${e.target.value}`);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        let time = new Date();
        let questionTime = time.getTime();
        addMessage(questionTime, question)

        let responseTime = time.getTime() + 1;
        addMessage(responseTime, "")
        QueryModel(responseTime, question, addMessage)
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
           {displayPicture()}
           {/* <input type="submit" className="submitButton" /> */}
        </form>
    )
}

export default QuestionBox;