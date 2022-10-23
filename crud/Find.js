const { MongoClient } = require("mongodb");

const uri = "mongodb://0.0.0.0:27017/";

const client = new MongoClient(uri);
const database = client.db("schoolDB").collection("student");

//Find all DATA
const findAllData = async () => {
  try {
    const results = await database.find();
    await results.forEach(console.dir);
  } finally {
    client.close();
  }
};

//FindOne
const findOneByOne = async () => {
  try {
    const results = await database.findOne();
    console.log(results);
  } finally {
    client.close();
  }
};
// findAllData().catch(console.dir);
//findOneByOne().catch(console.dir);
