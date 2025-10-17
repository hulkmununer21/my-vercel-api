const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI; // MongoDB connection string from environment variables
let client;
let db;

const connectDB = async () => {
    if (!client) {
        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db(process.env.DB_NAME); // Database name from environment variables
    }
    return db;
};

const closeDB = async () => {
    if (client) {
        await client.close();
        client = null;
        db = null;
    }
};

module.exports = {
    connectDB,
    closeDB,
};