console.log("Aircraft Sim server: START");

const express = require('express')
const bodyParser = require("body-parser");

const app = express()
const router = express.Router();
const port = 3000
const path = require('path');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const A380 = require('./planes/A380');
const B747 = require('./planes/B747');

let a3801 = new A380("First", 100, false, 100, "Alpha", "10432");
let b7471 = new B747("Second", 120, false, 100, "Beta", "3214");

// Receive 
router.post('/handleInput',(request,response) => {
  console.log(request.body);
});

app.use("/", router);

// Send
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './webdata/index.html'));
})

app.get('/datastream.json', (req, res) => {
  data = a3801.name;
  res.send(JSON.stringify(a3801));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

