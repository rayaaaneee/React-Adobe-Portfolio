import Database from 'better-sqlite3';
import dotenv from 'dotenv';

dotenv.config();

const database_name: string = process.env.DATABASE_NAME || 'database.db';

const db = new Database(database_name);

try {
    db.prepare(
        `CREATE TABLE IF NOT EXISTS message (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            message TEXT NOT NULL
        );`
    ).run();
} catch (error) {
    console.error(error);
}
