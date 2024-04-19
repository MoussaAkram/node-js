import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
    let dburl :any = process.env.MONGODB_URL;
  try {
    await connect(dburl);
  } catch (error) {
    console.log(error);
    throw new Error("Could not Connect To MongoDB");
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Could not Disconnect From MongoDB");
  }
}

export { connectToDatabase, disconnectFromDatabase };