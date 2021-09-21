import connectToDatabase from "../../../lib/db";

export default async function handler(req: any, res: any) {
  const data = req.body;
  const { username, password } = data;

  const client = await connectToDatabase();
  const db = client.db();

  const isUserExist = await db
    .collection("users")
    .findOne({ username: username });

  console.log("user did exist ", isUserExist);

  let updatedUser;

  if (isUserExist) {
    updatedUser = await db
      .collection("users")
      .updateOne({ username: username }, { $set: { password: password } });
  }

  console.log("updated user ", updatedUser);

  client.close();

  res.status(201).json({
    message: updatedUser ? "AUTHENTICATED" : "UPDATED FAILED",
  });
}
