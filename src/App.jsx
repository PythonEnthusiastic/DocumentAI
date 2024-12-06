import ChatPage from "./pages/ChatPage";
import { DragAndDropProvider } from "./components/DragAndDropContext";

import "./styles/background.css";

const App = () => {
    return (
      <DragAndDropProvider>
        <ChatPage />
      </DragAndDropProvider>
    )
}

export default App
