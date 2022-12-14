const { MongoClient } = require("mongodb");
require("dotenv").config();

// Connection URI
const uri = process.env.DB_PORT_URL;

// Create a new MongoClient
const client = new MongoClient(uri);

const dbTest = async () => {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Establish and verify connection
    await client.db("schoolDB").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};
dbTest().catch(console.dir);
