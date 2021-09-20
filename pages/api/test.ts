import { MongoClient } from "mongodb";

export default async function handler(req: any, res: any) {
  const data = req.body;
  const { username, password } = data;

  console.log("API ROUTE RESPONSE: ");
  console.log("username: ", username);
  console.log("password: ", password);

  const client = await MongoClient.connect(`${process.env.MONGODB_URI}`);
  const db = client.db();
  await db
    .collection("users")
    .insertOne({ username: username, password: password });

  client.close();

  res.status(201).json({
    message: "USER CREATED SUCCESSFULLY !",
  });
}
