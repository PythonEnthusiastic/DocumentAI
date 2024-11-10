import { useState } from 'react'
import { useEffect } from 'react'
import { ThemeProvider } from './components/Theme'
import Container from './components/Container'

const App = () => {
    const [count, setCount] = useState(1)

    // useEffect(() => {
    //     if (count % 2 == 0) {
    //         setCount((count) => "hello")
    //     }
    // }, [])

    return (
      <>
        <ThemeProvider>
            <Container/>
        </ThemeProvider>
          {/* <h1>Terry's React Course</h1>
          <h2>UseState</h2>
          <h3>{count}</h3>
          <button onClick={() => setCount((count) => count + 1)}>
              Increase
          </button> */}
      </>
    )
}

export default App
