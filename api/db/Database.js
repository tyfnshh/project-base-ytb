const mongoose = require('mongoose');

let instance = null;

class Database {
  constructor() {
    if (!instance) {
      this.mongoConnection = null;
      instance = this;
    }
    return instance;
  }

  async connect() {
    try {
      console.log("DB connecting...");

      const db = await mongoose.connect(
        "mongodb://127.0.0.1:27017/test"
      );

      this.mongoConnection = db;
      console.log("DB connected successfully");

    } catch (err) {
      console.error("DB connection error:", err);
      process.exit(1);
    }
  }
}

module.exports = Database;
