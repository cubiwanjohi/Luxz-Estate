import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import userRoute from './routes/userRoute.js'
import authRoute from './routes/authRoute.js'

const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json());

app.listen(port, () => console.log(`Server started on port ${port}`));  

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

app.use((err, req, res, next)=> {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message, 
    })
})