import { useContext } from "react"
import { ThemeContext } from "./Theme"

const Container = () => {
    const { isDark, toggleTheme } = useContext(ThemeContext)
    const val = isDark ? "Dark mode":"Light Mode";

    return (
        <>
            <h1>hello</h1>
            <h1>{val}</h1>
            <button onClick={toggleTheme}>
                {"Change to " + val}
            </button>
        </>
    )
}

export default Container