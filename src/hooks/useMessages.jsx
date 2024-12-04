import { useState } from "react";

const useMessages = () => {
    const [messages, setMessages] = useState({});

    const addMessage = (uid, message) => {
        setMessages((messages) => ({...messages, [uid]: message}))
    }

    return [messages, addMessage]
}

export default useMessages;