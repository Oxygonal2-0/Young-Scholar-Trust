import dotenv from 'dotenv';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
dotenv.config()

import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT;

// CORS POLICY
app.use(cors())

app.listen(port, ()=>{
    console.log(`Server listening at https://localhost:${port}`)
})