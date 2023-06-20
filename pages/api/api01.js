import { connectDatabase, getAllDocuments,getAllCollectionNames } from "../utils/db";

async function handler(req, res) {
  try {
    const client = await connectDatabase();
    const documents = await getAllDocuments(client, "items");

    res.status(200).json(documents);
  } finally {
    client.close();
  }
}

export default handler;
