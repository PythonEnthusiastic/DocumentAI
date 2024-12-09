import { firestore } from './firebase.js';
import { collection, addDoc, doc, getDocs, query, orderBy } from 'firebase/firestore';

export const ingestDocument = async (file) => {
    if (file.type !== 'application/pdf' && file.type !== 'text/plain' && file.type !== 'application/json') {
      console.error('Invalid file type. Only PDF, TXT, and JSON are supported.');
      return;
    }
  
    const reader = new FileReader();
  
    reader.onload = async (e) => {
      const content = e.target.result;
  
      try {
        const docRef = await addDoc(collection(firestore, 'documents'), {
          content: content,
        });
  
        console.log('Document successfully written with ID:', docRef.id);
      } catch (error) {
        console.error('Error writing document: ', error);
      }
    };
  
    reader.readAsText(file);
  };

const computeCosineSimilarity = (vector1, vector2) => {
    const keys = new Set([...Object.keys(vector1), ...Object.keys(vector2)]);

    let dotProduct = 0;
    let magnitude1 = 0;
    let magnitude2 = 0;

    keys.forEach(key => {
        const val1 = vector1[key] || 0;
        const val2 = vector2[key] || 0;
        dotProduct += val1 * val2;
        magnitude1 += val1 * val1;
        magnitude2 += val2 * val2;
    });

    return dotProduct / (Math.sqrt(magnitude1) * Math.sqrt(magnitude2));
};

const tokenize = (text) => {
    const tokens = text.toLowerCase().split(/\s+/);

    const vector = {};
    tokens.forEach(token => {
        if (vector[token]) {
            vector[token]++;
        } else {
            vector[token] = 1;
        }
    });

    return vector;
};

export const retrieveDocuments = async (queryInput) => {
    try {
        // Get a reference to the 'documents' collection
        const documentsCollectionRef = collection(firestore, 'documents');

        // Create a query to fetch all documents, ordered by similarity score
        const querySnapshot = await getDocs(query(documentsCollectionRef));

        const documents = querySnapshot.docs.map(doc => {
            console.log(doc.data())
            const docData = doc.data();
            return { ...docData }; // Extract the document data, but we don't need its ID explicitly
        });

        // Assuming each document content is already tokenized into vectors
        const queryVector = tokenize(queryInput); // Tokenize the user input into a vector
        const similarities = documents.map(doc => {
            const docVector = tokenize(doc.content); // Extract vector from document
            const similarityScore = computeCosineSimilarity(queryVector, docVector);
            return { similarity: similarityScore, content: doc.content };
        });

        // Sort documents by similarity score (descending)
        const sortedDocuments = similarities.sort((a, b) => b.similarity - a.similarity);

        // Return the content of the top similar document
        const topDocument = sortedDocuments[0];

        if (topDocument) {
            return topDocument.content;
        } else {
            console.log('No relevant documents found.');
            return null;
        }

    } catch (error) {
        console.error('Error retrieving documents:', error);
        throw error;
    }
};
