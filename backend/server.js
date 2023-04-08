require('dotenv').config();
const express = require('express');
const myapp = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
myapp.use(cors());
const saltRounds = 10;
myapp.use(express.json())

myapp.listen(5000, () => {
    console.log("Server Started")
});

myapp.use(express.static("public"));

myapp.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.set('strictQuery', true);

const host = process.env.MONGODB_HOST
const port = process.env.MONGODB_PORT
const database = process.env.MONGODB_DATABASE

const mongoUri = `mongodb://${host}:${port}/${database}`
mongoose.connect(mongoUri, { useNewUrlParser: true })
    .then(() => {
        console.log(`Connected to MongoDB ${host}:${port}`)
    })
    .catch((e) => console.log(e))

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = new mongoose.model("User", userSchema);


myapp.post("/signup", function (req, res) {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        });

        newUser.save(function (err) {
            if (err) {
                res.send({ status: "err" })
                console.log(err);
            } else {
                res.send({ status: "ok" })
                console.log("sending to next page");
            }
        })
    });

});

myapp.post('/login', function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email }, function (err, foundUser) {
        if (err) {
            res.send({ status: "err" })
            console.log(err);
        } else {
            if (foundUser) {
                bcrypt.compare(password, foundUser.password, function (err, result) {
                    if (result === true) {
                        res.send({ status: "ok" })
                    } else {
                        const message = "incorrect user name/password"
                        res.status(401).send({ status: message })
                        console.log(message);
                    }
                });
            } else {
                console.log("user not found!");
                res.status(401).send({ status: "err", message: "user not found" })
            }

        }
    });
});






// myapp.post("/signup", async (req, res) => {
//     const { name, email, password } = req.body
//     try {
//         await User.create({
//             name,
//             email,
//             password,
//         });
//         res.send({ status: "ok" })
//     } catch (error) {
//         res.send({ status: "error" })
//     }
// })



// myapp.post("/post", async (req, res) => {
//     const { name, email, password } = req.body;

//     try {
//         await User.create({
//             name: name,
//             email: email,
//             password: password,
//         });
//         res.send({ status: "Ok" })
//     } catch (error) {
//         res.send({ status: "error" })
//     }


// })

