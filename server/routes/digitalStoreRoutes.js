const express = require("express");
const mysql = require('mysql');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const digitalStoreRouter = express.Router();


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "147258369"
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected successfully to MySQL DB!");
});


const generateAccessToken = async (req,res) => {

    const username = req.body.username;
    dotenv.config();

    const token = jwt.sign(username, process.env.TOKEN_SECRET);
    res.status(200).json({
        token
    })
  }

const login = async (req, res) => {

    connection.query('SELECT * from digitalstore.users', function (err, rows, fields) {
        if (err) throw err
        let userConnect = rows.filter((user) => { return (user.username.toString() == req.body.username.toString() && user.password.toString() == req.body.password.toString()) });
        if (userConnect.length != 0) {
            res.status(200).json({
                success: true,
            });
        } else {
            res.status(200).json({
                success: false,
            });
        }

    })

}

digitalStoreRouter.route("/generateAccessToken").post(generateAccessToken);
digitalStoreRouter.route("/login").post(auth,login);

module.exports = digitalStoreRouter;