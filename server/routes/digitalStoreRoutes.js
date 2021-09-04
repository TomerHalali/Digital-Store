const express = require("express");
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "147258369"
});
const digitalStoreRouter = express.Router();

const getMain = async (req, res) => {
    res.status(200).json({
        status: "success"
    });
};

const login = async (req, res) => {
    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected successfully to MySQL DB!");
    });

    connection.query('SELECT * from digitalstore.users', function (err, rows, fields) {
        if (err) throw err
        res.status(200).json({
            status: "success",
            data: rows
        });
    })

    connection.end();
}

digitalStoreRouter.route("/").get(getMain);
digitalStoreRouter.route("/login").post(login);


module.exports = digitalStoreRouter;