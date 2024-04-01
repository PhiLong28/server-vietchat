const Router = require('express');
const authRouter = Router()

authRouter.post('/register', (req, res)=>{
    console.log(req.body);
    res.send('hehehe1234566666');
})

module.exports=authRouter;
