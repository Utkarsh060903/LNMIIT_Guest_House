import express from 'express'
import { connect } from 'mongoose';
import { connectDB } from './config/db.js';
import cors from 'cors'
import userRouter from './routes/userRoute.js';
import formRouter from './routes/formRoute.js';
import dotenv from 'dotenv'
const app = express()

dotenv.config();

const port = 4001;

app.use(express.json())
app.use(cors())

app.use('/api/user' , userRouter)
app.use('/api' , formRouter)

connectDB();

app.listen(port , () => {
    console.log(`backend activated at ${port}`);
}) 

