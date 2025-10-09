require("dotenv").config();

const { MongoClient } = require("mongodb");

const url = process.env.DATABASE_URL

const client = new MongoClient(url);

async function conectarDb() {
    await client.connect()
    console.log("Db conectado")
    return client.db('agenda')

}

module.exports = conectarDb