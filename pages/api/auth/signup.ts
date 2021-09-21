import { MongoClient } from "mongodb";
import connectToDatabase from "../../../lib/db";

export default async function handler(req: any, res: any) {
  const data = req.body;
  const { username, password } = data;

  console.log("API ROUTE RESPONSE: ");
  console.log("username: ", username);
  console.log("password: ", password);

  const client = await connectToDatabase();
  const db = client.db();

  const isUsernameAlreadyExist = await db
    .collection("users")
    .findOne({ username: username });

  const isPasswordAlreadyExist = await db
    .collection("users")
    .findOne({ password: password });

  let isCreated;
  if (!isPasswordAlreadyExist || !isUsernameAlreadyExist) {
    isCreated = await db.collection("users").insertOne({
      username: username,
      password: password,
    });
  }

  client.close();

  res.status(201).json({
    message: isCreated ? "AUTHENTICATED" : "ALREADY EXISTS",
  });
}
