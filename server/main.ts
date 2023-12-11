import express, { Request, Response } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

import sendMessage from './parts/sendMessage';
import Database from 'better-sqlite3';

dotenv.config();

const app: any = express();
const port: number | string = process.env.PORT || 3000;
const database_name: string = process.env.DATABASE_NAME || 'database.db';
/* const cors_options: any = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:4200',
    optionsSuccessStatus: 200
};
 */

export const db = new Database(database_name);

app.use(cors());
app.use(express.json());

app.post('/send',(req: Request, res: Response) => {
    sendMessage(req, res);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

