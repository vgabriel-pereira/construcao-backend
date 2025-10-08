require("dotenv").config();
const { MongoClient } = require("mongodb");

const url = process.env.DATABASE_URL;

const client = new MongoClient(url);

async function connect() {
  try {
    await client.connect();
    console.log("Conectado ao DB");
    return client.db('agenda')
  } catch (error) {
    console.error("Não foi possivel conectar ao DB", error);
  }
}

module.exports = connect;
