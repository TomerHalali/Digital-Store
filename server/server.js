const express = require('express')
const cors = require('cors')
const digitalStoreRouter = require("./routes/digitalStoreRoutes");

//////////////////// Server Listen ////////////////////

const app = express();
const port = 3010;



app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // For Reading Body
app.use(cors()); // For Apply Post/Get Request From UI
app.use("/api/v1/", digitalStoreRouter);
app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})
