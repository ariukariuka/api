const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const User = require("./models/User")
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const app = express()

const salt = bcrypt.genSaltSync(10);
const secret = 'fdas7f8y6875fa8'
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect("mongodb+srv://blog-app:1uSX0fANLvgQehNG@blog-app.3riam0b.mongodb.net/?retryWrites=true&w=majority")


app.post("/register", async (req, res) => {
    const {username, password} = req.body;
    try{
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt)
        })
        res.json(userDoc)
    } catch(e){
        console.log(e)

        res.status(400).json(e)
    }
    

})

app.post("/login", async (req, res) => {
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password); 
    if(passOk){
        jwt.sign({username, id:userDoc._id}, secret, {}, (err, token) => {
            if(err) throw err;
            res.cookie('token', token).json({
                id: userDoc._id,
                username,
            })
        })
    } else {
        res.status(400).json("buruun bna okay")
    }
})



app.get('/profile', (req, res) => {
    const {token} = req.cookies
    jwt.verify(token, secret, {}, (err, info) => {
        if(err) throw err;
        res.json(info);
    })
    res.json(req.cookies)
})
app.post('/logout', (req, res) => {
    res.cookie("token", "").json("logout hiilee okay")
})

app.listen(4000, () => console.log("start working"));




// password : 1uSX0fANLvgQehNG

// mongodb+srv://blog-app:1uSX0fANLvgQehNG@blog-app.3riam0b.mongodb.net/?retryWrites=true&w=majority
