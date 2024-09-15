// backend/index.js
const express = require('express');

const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();


app.use(cors(
    {
        origin:["https://cashless-wallet-v2-mkoa.vercel.app"],
        methods:["POST", "GET"],
        credentials:true
    }
));
app.use(express.json());


app.use("/api/v1", rootRouter);

app.listen(3002);
