// backend/index.js
const express = require('express');
const helmet = require('helmet');

const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      styleSrc: ["'self'", "https://cdnjs.cloudflare.com"],
      scriptSrc: ["'self'"]
    }
  }));
app.use(cors(
    {
        origin:["https://cashless-wallet-v2-mkoa.vercel.app/"],
        methods:["POST", "GET"],
        credentials:"true"
    }
));
app.use(express.json());


app.use("/api/v1", rootRouter);

app.listen(3002);