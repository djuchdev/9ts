// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// // const ejs = require('ejs');
// const mongoose = require('mongoose')
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const cors = require('cors')



// const myapp = express();
// myapp.use(cors());

// myapp.use(express.static("public"));
// myapp.set('view engine', 'ejs');
// myapp.use(bodyParser.urlencoded({
//     extended: true
// }));


// mongoose.myapp("mongodb://localhost:27017/appNames", { useNewUrlParser: true });

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// });


// const User = new mongoose.model("User", userSchema);



// myapp.get("/welcome", function (req, res) {
//     res.render('Welcome');
// });

// myapp.get("/login", function (req, res) {
//     res.render('Login');
// });

// myapp.get("/signup", function (req, res) {
//     res.render('Signup');
// });

// myapp.get("/verified", function (req, res) {
//     res.render('Verified');
// });

// myapp.get("/welcomeback", function (req, res) {
//     res.render('WelcomeBack');
// });

// myapp.get("/userstart", function (req, res) {
//     res.render('UserStart');
// });

// myapp.get("/musicapp", function (req, res) {
//     res.render('MusicApp');
// });

// myapp.get("/playertest", function (req, res) {
//     res.render('playertest');
// });

// myapp.get("/findfriends", function (req, res) {
//     res.render('FindFriends');
// });

// myapp.post("/Signup", function (req, res) {

//     bcrypt.hash(req.body.password, saltRounds, function (err, hash) {

//         const newUser = new User({
//             name: req.body.username,
//             email: req.body.email,
//             password: hash
//         });

//         newUser.save(function (err) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.render('verified');
//             }
//         })

//     });

// });

// myapp.post('/login', function (req, res) {
//     const email = req.body.email;
//     const password = req.body.password;

//     User.findOne({ email: email }, function (err, foundUser) {
//         if (err) {
//             console.log(err);
//         } else {
//             if (foundUser) {
//                 bcrypt.compare(password, foundUser.password, function (err, result) {
//                     if (result === true) {
//                         res.render('user-start');
//                     }
//                 });
//             }
//         }
//     });
// });



// myapp.listen(3000, function () {
//     console.log("Server Started on Port 3000.")
// });