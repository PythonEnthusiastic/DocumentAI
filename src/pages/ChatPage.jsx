import useMessages from "../hooks/useMessages";

import { v1 as uuidv1 } from 'uuid';

import Message from "../components/Message";
import Chat from "../components/Chat";
import QuestionBox from "../components/QuestionBox";

const ChatPage = () => {
    const [messages, setMessages] = useMessages();

    const containerStyle = {
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "90vh"
    }

    return (
        <div style={containerStyle}>
            <Chat>
                {messages.map(message => (
                    <div key={uuidv1()}>
                        {message}
                    </div>
                ))}
            </Chat>
            <QuestionBox addMessage={setMessages} />
        </div>
    )
}

export default ChatPage;