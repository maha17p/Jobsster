import express from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import cors from 'cors'

import connectDB from './db/connectDB';
import errorHandlerMiddleware from './middleware/error-handler'
import notFoundMiddleware from './middleware/not-found'
import autheticateUser from './middleware/auth'

import authRouter from './routes/authRoutes'
import jobsRouter from './routes/jobsRoutes'






dotenv.config();
const app = express();
const portNum = process.env.PORT || 5000;


app.use(express.json())
app.use(cors())

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/jobs',autheticateUser,jobsRouter)

  

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(portNum,() => console.log(`Server is listening on port ${portNum}...`))
    } catch (error) {
        console.log(error);
    }
}

start()



