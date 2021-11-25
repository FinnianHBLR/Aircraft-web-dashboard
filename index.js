console.log("Aircraft Sim START");

const express = require('express')
const app = express()
const port = 3000
const A380 = require('./planes/A380');
const B747 = require('./planes/B747');

const path = require('path');

let a3801 = new A380("First", 100, false, 100, "Alpha", "10432");

// name, taxingStatus, weight, fuelLevel, callSign, boeingCode
let b7471 = new B747("Second", 120, false, 100, "Beta", "3214");
console.log(JSON.stringify(a3801));

title = "Plane Data";

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




//function intervalFunc() {
  //dsa = dsa + 1;
  //console.log(dsa);
//}

//setInterval(intervalFunc, 1500);
