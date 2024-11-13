import "../styles/chat.css"

const Chat = ({ children }) => {
    return (
        <div className="chat-container">
            <div className="chat">
                { children }
            </div>
        </div>
    )
}

export default Chat;