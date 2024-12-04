const QueryModel = async (pId, userString, addMessage) => {
    if (userString == "") {
        return 
    }

    const payload = {
        input: userString,
    }

    const response = await fetch("http://localhost:5001/documentai-440916/us-central1/queryOllamaModel", {
        method: "POST",
        header: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(payload)
    }); 

    let messageString = "";
    const decoderString = new TextDecoderStream("utf-8");
    const writer = new WritableStream({
        write(chunk) {
            if (chunk) {
                messageString += chunk.slice(1, -1);
                addMessage(pId, messageString)
            }
        }
    })

    response.body  
        .pipeThrough(decoderString)
        .pipeTo(writer)
};

export default QueryModel;
