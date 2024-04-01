
const express = require('express')
const cors = require('cors')
//const authRouter = require('./routers/authRouter')
const app = express()

app.use(cors())

const PORT = 3001;

app.get('/auth/hello', (_req, res)=>{
    res.send('<h1>Hello World</h1>')
})


app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    } 
        console.log(`Server is running at http://localhost:${PORT}`)
});