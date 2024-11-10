import { useState } from 'react'
import { useEffect } from 'react'
import { ThemeProvider } from './components/Theme'
import Container from './components/Container'
import Message from './components/Message'

const App = () => {
    const [count, setCount] = useState(1)

    // useEffect(() => {
    //     if (count % 2 == 0) {
    //         setCount((count) => "hello")
    //     }
    // }, [])

    return (
      <>
        <Message></Message>
        {/* <ThemeProvider>
            <Container/>
        </ThemeProvider> */}
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

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
