import { MongoClient } from "mongodb";

const connectToDatabase = async () => {
  const client = await MongoClient.connect(`${process.env.MONGODB_URI}`);
  return client;
};

export default connectToDatabase;
