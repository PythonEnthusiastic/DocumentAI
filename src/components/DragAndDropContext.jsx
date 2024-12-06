import { createContext, useState } from "react";

const DragAndDropContext = createContext();

const DragAndDropProvider = ({ children }) => {
    const [file, setFile] = useState(null);

    const handleDrop = (e) => {
        e.preventDefault()
        const file = e.dataTransfer.files[0];
        setFile(file)
    }

    const handleDragOver = (e) => {
        e.preventDefault();
      };
    
    const handleDragLeave = (e) => {
        e.preventDefault();
    };

    return (
        <div 
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
        >
            <DragAndDropContext.Provider value={{file, setFile}}>
                { children }
             </DragAndDropContext.Provider>
        </div>
    )
};

export { DragAndDropContext, DragAndDropProvider };