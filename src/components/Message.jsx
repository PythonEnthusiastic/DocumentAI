import ExitIcon from "../assets/ExitIcon.jsx";
import MinimizeIcon from "../assets/MinimizeIcon.jsx";
import DownRightArrow from "../assets/DownRightArrow.jsx";
import '../styles/fonts.css';
// import "../styles/message.css"

// TODO: ChatContext
// Will hold messages within it's context
// Will spawn new messages as they are submitted

const Message = (props) => {
    const headerContent = props.headerContent
    const messageContent  = props.messageContent

    const messageStyle = {
        backgroundColor: "#9A79FC",
        fontFamily: 'GG Sans, sans-serif',
        maxHeight: "400px"
    }

    return (
        <div style={messageStyle} className="Message">
            <Header />
            <Content />
        </div>
    )
}

const Header = () => {
    const headerStyle = {
        backgroundColor: '#262626',
        color: '#9A79FC',
        padding: '4px 4px 2.5px 4px', // top, right, bottom, left
        borderBottom: '0.5px solid #9A79FC',
        display: 'flex',
        justifyContent: 'space-between',
        radius: '15px',
        alignItems: 'center'
    };

    const leftStyle = {
        display: 'flex',
        alignItems: 'center'
    };

    const arrowStyle = {
        marginRight: '10px'
    };

    const iconsStyle = {
        display: 'flex',
        alignItems: 'center'
    };

    return (
        <div style={headerStyle} className="Message-header">
            <div style={leftStyle}>
                <DownRightArrow style={arrowStyle} />
                DocumentAI
            </div>
            <div style={iconsStyle} className="Message-header-icons">
                <MinimizeIcon />
                <ExitIcon />
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
    }

    const innerMessageStyle = {
        display: "inline-block",
        backgroundColor: "#262626",
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
                <p style={contentStyle}>Million Dollar Company here we company here we come ain't nothing stopping us!</p>
            </div>
        </div>
    )
    // It's true
}

export default Message;

