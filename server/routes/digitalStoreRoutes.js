const express = require("express");
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "147258369"
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected successfully to MySQL DB!");
});
const digitalStoreRouter = express.Router();

const getMain = async (req, res) => {
    res.status(200).json({
        status: "success"
    });
};

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

digitalStoreRouter.route("/").get(getMain);
digitalStoreRouter.route("/login").post(login);


module.exports = digitalStoreRouter;