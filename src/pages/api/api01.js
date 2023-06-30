import { connectDatabase, getAllDocuments } from "../../services/db";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await connectDatabase();
      const documents = await getAllDocuments(client, "items");
      res.status(200).json(documents);
    } catch (error) { res.status(500).json({ message: "Connecting to the database failed!" }) }
  }
}

export default handler;
