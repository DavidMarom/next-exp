import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  // Connection URL for your MongoDB server
  const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB server URL

  // Database and collection names
  const dbName = 'your_database_name';
  const collectionName = 'your_collection_name';

  try {
    // Connect to the MongoDB server
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Query the collection or perform any desired operations
    const data = await collection.find({}).toArray();

    // Close the MongoDB connection
    client.close();

    // Return the retrieved data as the API response
    res.status(200).json(data);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
