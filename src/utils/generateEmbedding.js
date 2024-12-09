export const generateEmbedding = async (text) => {
    try {
      // Define the URL for your Firebase Function
      const functionUrl = "https://us-central1-your-project-id.cloudfunctions.net/generateEmbeddingAndStore";
  
      // Prepare the payload (the text to embed)
      const payload = { text: text };
  
      // Call the Firebase Function using fetch
      const response = await fetch(functionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",  // Make sure the content is JSON
        },
        body: JSON.stringify(payload),  // Send the payload as JSON
      });
  
      // Handle the response from the Firebase Function
      if (response.ok) {
        const result = await response.json();
        console.log("Embedding generated and stored:", result);
        // You can handle the result here, such as showing the document ID or the response
      } else {
        console.error("Error generating embedding:", response.statusText);
      }
    } catch (error) {
      console.error("Error calling Firebase function:", error);
    }
};
