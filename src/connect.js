require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const ejs = require('ejs');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const saltRounds = 10;


const connect = express();

connect.use(express.static("public"));
connect.set('view engine', 'ejs');
connect.use(bodyParser.urlencoded({
    extended: true
}));


mongoose.connect("mongodb://localhost:27017/appNames", {useNewUrlParser: true});

const userSchema = new mongoose.Schema ({
    name: String,
    email: String,
    password: String
});


const User = new mongoose.model("User", userSchema);



connect.get("/welcome", function(req, res){
    res.render('Welcome');
});

connect.get("/login", function(req, res){
    res.render('Login');
});

connect.get("/signup", function(req, res){
    res.render('Signup');
});

connect.get("/serified", function(req, res){
    res.render('Werified');
});

connect.get("/welcomeback", function(req, res){
    res.render('WelcomeBack');
});

connect.get("/userstart", function(req, res){
    res.render('UserStart');
});

connect.get("/musicapp", function(req, res){
    res.render('MusicApp');
});

connect.get("/playertest", function(req, res){
    res.render('playertest');
});

connect.get("/findfriends", function(req, res){
    res.render('FindFriends');
});

connect.post("/Signup", function(req, res){

    bcrypt.hash(req.body.password, saltRounds, function(err, hash){
        
        const newUser = new User({
            name: req.body.username,
            email: req.body.email,
            password: hash
        });
    
        newUser.save(function(err){
            if (err) {
                console.log(err);
            } else {
                res.render('verified');
            }
        })

    });
  
});

connect.post('/login', function (req, res){
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email}, function(err, foundUser){
        if (err) {
            console.log(err);
        } else {
            if (foundUser) {
                bcrypt.compare(password, foundUser.password, function(err, result) {
                   if (result === true){
                    res.render('user-start');
                   }
                });
            }  
        }
    });
});



connect.listen(3000, function(){
    console.log("Server Started on Port 3000.")
});