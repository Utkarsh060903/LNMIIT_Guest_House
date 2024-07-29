import express from 'express'
import { connect } from 'mongoose';
import { connectDB } from './config/db.js';
import cors from 'cors'
import userRouter from './routes/userRoute.js';
import formRouter from './routes/formRoute.js';
import dotenv from 'dotenv'
import getInfoRouter from './routes/getInfoRoute.js';
const app = express()

dotenv.config();

const port = 4001;

app.use(express.json())
app.use(cors())

app.use('/api/user' , userRouter)
app.use('/api' , formRouter)
app.use('/api' , getInfoRouter)

app.use('/uploads', express.static('uploads'));

connectDB();

app.listen(port , () => {
    console.log(`backend activated at ${port}`);
}) 

