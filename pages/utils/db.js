import { MongoClient } from "mongodb";

export async function connectDatabase() {
  return await MongoClient.connect("mongodb+srv://maromdavid7:IwdCUmWBfZqwraXg@cluster0.d74ktnk.mongodb.net");
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection) {
  const db = client.db('bold');
  const documents = await db.collection(collection).find().toArray();
  return documents;
}

export async function getAllCollectionNames() {
    const uri = client.db();
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
  
      const database = client.db('bold'); // Replace with your database name
  
      const collections = await database.listCollections().toArray();
      const collectionNames = collections.map((collection) => collection.name);
      return collectionNames;
    } finally {
      await client.close();
    }
  }
