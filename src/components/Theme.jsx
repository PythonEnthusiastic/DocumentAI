import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark((theme) => !theme)
    }

    return (
        <div>
            <ThemeContext.Provider value={{isDark, toggleTheme}}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
}

export { ThemeContext, ThemeProvider }