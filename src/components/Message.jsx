import ExitIcon from "../assets/ExitIcon.jsx";
import MinimizeIcon from "../assets/MinimizeIcon.jsx";
import DownRightArrow from "../assets/DownRightArrow.jsx";
import '../styles/fonts.css';
import "../styles/message.css"

// TODO: ChatContext
// Will hold messages within it's context
// Will spawn new messages as they are submitted

const Message = (props) => {
    const messageStyle = {
        backgroundColor: "#7e75c1",
        // fontFamily: 'GG Sans, sans-serif',
        // boxShadow: "0 0 10px #7e75c1",
        // animation: "boxShadowAnimation 3s ease-in-out infinite",
        maxHeight: "400px",
        paddingTop: "1px",
    }

    return (
        <div style={messageStyle} className="Message">
            <Header />
            <Content />
        </div>
    )
}

// Slightly Lighter: #7e75c1
// Slightly Darker: #756bb3
// Moderately Darker: #6d63a6
// #9474df

const Header = () => {
    const headerStyle = {
        backgroundColor: '#18171f',
        color: '#715dc2',
        marginBottom: ".5px",
        marginRight: "1px",
        marginLeft: "1px",
        display: 'flex',
        justifyContent: 'space-between',
        radius: '15px',
        alignItems: 'center'
    };

    const leftStyle = {
        color: "#9A79FC",
        textShadow: "0 0 1.8px #9474df, 0 0 0.5px #9474df",
        letterSpacing: "clamp(.05rem, .08rem, .1rem)",
        fontSize: "min(max(5vw, 2rem), 6.5vw)",
        display: 'flex',
        alignItems: 'center',
        animation: "glowEffect 3s ease-in-out infinite",
    };

    const arrowStyle = {
        color: "#7e75c1",
        width: "100%",
        height: "auto"
    };

    const iconsStyle = {
        display: 'flex',
        alignItems: 'center',
        textShadow: "0 0 1.2px #9474df",
        animation: "glowEffect 3s ease-in-out infinite"
    };

    return (
        <div style={headerStyle} className="Message-header">
            <div style={leftStyle}>
                <DownRightArrow style={arrowStyle} />
                DocumentAI
            </div>
            <div style={iconsStyle} className="Message-header-icons">
                <MinimizeIcon color="#7e75c1"/>
                <ExitIcon color="#7e75c1"/>
            </div>
        </div>
    )
}

const Content = () => {
    const outerMessageStyle = {
        paddingTop: ".5px",
        paddingLeft:"1px",
        paddingRight: "1px",
        paddingBottom: "1px",
        minHeight: "100%",
    }

    const innerMessageStyle = {
        display: "inline-block",
        backgroundColor: "#18171f",
        height: "100%",
        width: "100%",
        borderBottomRightRadius: "15px",
    }

    const contentStyle = {
        fontSize: "min(max(5vw, 2rem), 6vw)",
        color: "#F0EAD6",
        wordWrap: "break-word",
        margin: "4px",
        marginLeft: "clamp(5px, 6%, 25px)",
        marginRight: "clamp(5px, 6%, 20px)",
    }
    
    return (
        <div style={outerMessageStyle} className="outer-Message-content">
            <div style={innerMessageStyle} className="inner-Message-content">
                <p style={contentStyle}>Hello it is nice to meet you!</p>
            </div>
        </div>
    )
}

export default Message;

