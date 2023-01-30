import dotenv from 'dotenv';
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