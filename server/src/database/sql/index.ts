import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

export const initDB = async () => {
  const db = await open({
    filename: path.join(__dirname, "myPortfolio.sqlite"),
    driver: sqlite3.cached.Database,
  });

  await db.migrate({
    migrationsPath: path.join(__dirname, "..", "migrations"),
  });

  return db;
};
