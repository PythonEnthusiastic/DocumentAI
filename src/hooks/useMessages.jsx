import { useState } from "react";

const useMessages = () => {
    const [messages, setMessages] = useState({});

    const addMessage = (uid, message, author="") => {
        setMessages((messages) => ({...messages, [uid]: [message, author]}))
    }

    return [messages, addMessage]
}

export default useMessages;