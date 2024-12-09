import useMessages from "../hooks/useMessages";

import { v1 as uuidv1 } from 'uuid';

import Chat from "../components/Chat";
import QuestionBox from "../components/QuestionBox";
import Message from "../components/Message";

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
                {Object.values(messages).map(message => (
                    <div key={uuidv1()}>
                        <Message message={message[0]} author={message[1] ? message[1] : "DocumentAI"} />
                    </div>
                ))}
            </Chat>
            <QuestionBox addMessage={setMessages} />
        </div>
    )
}

export default ChatPage;