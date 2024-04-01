//"start-dev": "nodemon index.js",
const express = require('express')
const cors = require('cors');
const authRouter = require('./routers/authRouter');
const connectDB = require('./configs/connectDb');
const app = express()

app.use(cors())
app.use(express.json())

const PORT = 3001;

app.use('/auth', authRouter);

connectDB();

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    } 
        console.log(`Server is running at http://localhost:${PORT}`)
});