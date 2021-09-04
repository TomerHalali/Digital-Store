const express = require('express')
const mysql = require('mysql');
const digitalStoreRouter = require("./routes/digitalStoreRoutes");


//////////////////// Server Listen ////////////////////

const app = express();
const port = 3010;

app.use(express.json({ exteended: false }));
app.use("/", digitalStoreRouter);

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})
