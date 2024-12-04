import ExitIcon from "../assets/ExitIcon.jsx";
import MinimizeIcon from "../assets/MinimizeIcon.jsx";
import DownRightArrow from "../assets/DownRightArrow.jsx";
import "../styles/message.css"

const Message = ({ author="DocumentAI", message="" }) => {
    const messageStyle = {
        backgroundColor: "#7e75c1",
        width: "clamp(50%, 65vw, 100%)",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "50px",
        boxShadow: "0 0 2px #7e75c1",
        // animation: "boxShadowAnimation 3s ease-in-out infinite",
        paddingTop: "1px",
    }

    return (
        <div style={messageStyle} className="Message">
            <Header author={author} />
            <Content message={message} />
        </div>
    )
}

// Slightly Lighter: #7e75c1
// Slightly Darker: #756bb3
// Moderately Darker: #6d63a6
// #9474df

const Header = ({ author }) => {
    const headerStyle = {
        backgroundColor: '#18171f', // #1c1f2b
        color: '#715dc2',
        marginBottom: ".5px",
        marginRight: "1px",
        marginLeft: "1px",
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: "wrap",
        radius: '15px',
        alignItems: 'center',
    };

    const leftStyle = {
        textShadow: "0 0 1.8px #9474df, 0 0 0.5px #9474df",
        display: 'flex',
        alignItems: 'center',
    };

    const authorStyle = {
        color: "#9A79FC",
        fontSize: "1.7rem",
        letterSpacing: "clamp(.08rem, .1rem, .12rem)",
        textShadow: "0 0 1.8px #9474df, 0 0 0.5px #9474df",
        margin: "10px auto",
        wordWrap: "break-word",
    }

    const arrowStyle = {
        color: "#7e75c1",
        width: "100%",
        marginRight: "10px",
        marginLeft: "10px",
    };

    const iconsStyle = {
        display: 'flex',
        alignItems: 'center',
        textShadow: "0 0 1.2px #9474df",
        marginRight: "10px"
    };

    return (
        <div style={headerStyle} className="Message-header">
            <div style={leftStyle}>
                <DownRightArrow style={arrowStyle} />
                <p style={authorStyle}>{author}</p>
            </div>
            <div style={iconsStyle} className="Message-header-icons">
                <MinimizeIcon color="#7e75c1"/>
                <ExitIcon color="#7e75c1"/>
            </div>
        </div>
    )
}

const Content = ({ message }) => {
    const outerMessageStyle = {
        paddingTop: "0.5px",
        paddingLeft:"1px",
        paddingRight: "1px",
        paddingBottom: "1px",
    }

    const innerMessageStyle = {
        display: "inline-block",
        backgroundColor: "#18171f",
        minHeight: "100%",
        width: "100%",
        borderBottomRightRadius: "15px",
    }

    const contentStyle = {
        fontSize: "1.2rem",
        color: "#F0EAD6",
        wordWrap: "break-word",
        margin: "4px",
        marginTop: "clamp(5px, 10%, 15px)",
        marginBottom: "clamp(5px, 10%, 15px)",
        marginLeft: "clamp(5px, 10%, 25px)",
        marginRight: "clamp(5px, 10%, 20px)",
    }
    
    return (
        <div style={outerMessageStyle} className="outer-Message-content">
            <div style={innerMessageStyle} className="inner-Message-content">
                <p style={contentStyle}>{message}</p>
            </div>
        </div>
    )
}

export default Message;

