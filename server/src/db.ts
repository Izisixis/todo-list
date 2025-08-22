import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const dbPromise = (async () => {
  const db = await open({
    filename: './mydb.db',
    driver: sqlite3.Database,
  });

  await db.exec(`
            CREATE TABLE IF NOT EXISTS users (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              username TEXT,
              passwordHash TEXT
            );

            CREATE TABLE IF NOT EXISTS tokens (
              userId INTEGER,
              refreshToken TEXT
            );

            CREATE TABLE IF NOT EXISTS todos (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              title TEXT,
              completed INTEGER,
              userId INTEGER
            );
          `);
  return db;
})();

export default dbPromise;
