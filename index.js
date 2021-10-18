
const express = require("express");
const cors = require("cors");
const routerApi = require("./routes")
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whiteList = ["http://127.0.0.1:5500", "http://127.0.0.1:8080", "http://127.0.0.1:5501"];

const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin){
      callback(null, true);
    }else{
      callback(new Error("Acceso Denegado"));
    }
  }
}

app.use(cors(options));

app.get('/', (req, res) =>{
  res.send('Hola mi server en Express');
});

app.get('/home', (req, res) =>{
  res.send('Home');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port,()=>{
  console.log(`Listening at http://localhost:${port}`)
})




