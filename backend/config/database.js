// src/config/database.js
import { Sequelize } from "sequelize";

const db = new Sequelize("note", "root", "", {  
  host: "localhost",
  dialect: "mysql",
});

export default db;
