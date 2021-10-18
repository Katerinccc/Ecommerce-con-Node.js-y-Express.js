
const express = require("express");
const cors = require("cors");
const routerApi = require("./routes")
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});

app.get("/home", (req, res) =>{
  res.send("Home");
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port,()=>{
  console.log(`Listening at http://localhost:${port}`)
})




