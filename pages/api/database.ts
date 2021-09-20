import { MongoClient } from "mongodb";
import nextConnect from "next-connect";
const client = new MongoClient(
  "mongodb+srv://thanhhoan:1207@cluster0.sqcxc.mongodb.net/roombuds?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
async function database(req: any, res: any, next: any) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("roombuds");
  return next();
}
const middleware = nextConnect();
middleware.use(database);
export default middleware;
