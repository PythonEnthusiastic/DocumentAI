const QueryModel = async (pId, userString, addMessage, doc) => {
    if (userString == "") {
        return 
    }

    const payload = {
        input: userString + " Context (Deem if the context after this is necessary to answer the question, if yes then answer it with the context, if not then ignore the context entirely):" + doc  
    }

    const response = await fetch("Add ye own", {
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
