import connectToDatabase from "../../../lib/db";
import { MongoClient } from "mongodb";

export default async function handler(req: any, res: any) {
  const data = req.body;
  const { password } = data;

  console.log("API ROUTE RESPONSE: ");
  console.log("password: ", password);

  const client = await connectToDatabase();
  const db = client.db();

  const isFound = await db.collection("users").findOne({
    password: password,
  });

  client.close();

  res.status(201).json({
    message: isFound ? "AUTHENTICATED" : "USER NOT FOUND",
  });
}
