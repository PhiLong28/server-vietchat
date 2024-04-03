const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const asyncHandle = require('express-async-handler')
const jwt = require('jsonwebtoken')

const getJsonWebToken = async (email, id) => {
    const payload = {
        email, id
    }
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: '7d'
    });
    return token;
};


const register = asyncHandle(async (req, res) => {
    const {email, fullname, password}= req.body;

    const existingUser = await UserModel.findOne({email});
    
    if (existingUser){
        res.status(400);
        throw new Error(`User has already exist!`)
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    const newUser = new UserModel({
        email,
        fullname: fullname ?? '',
        password: hashedPassword,
    })
    await newUser.save()

    res.status(200).json({
        message: 'Register new user successfully!!!',
        data: {
            email: newUser.email,
            id: newUser.id,
            accesstoken: await getJsonWebToken(email, newUser.id),
        },
    })

});

module.exports = {
    register,
};

