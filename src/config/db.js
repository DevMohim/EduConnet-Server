import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("DB uri not found!");
}

const client = new MongoClient(uri);

export const db = client.db(process.env.DB_NAME);

export async function connectToMongoDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("MongoDB connected");
  } catch (err) {
    console.dir(err);
  }
}
