


const math = require('./math.js');
const cors = require("cors");
const express = require('express');
const app = express();


app.use(cors());
app.get('/Testing', (req, res) => {
    res.send('Calculator running ok')
});

app.get('/display', (req, res) => {

    res.send(JSON.stringify(req.query));
});

app.get('/sum', (req, res) => {
    let sum = 0;
    for (let key in req.query) {
        sum += parseInt(req.query[key])
    }
    res.send("Sum : " + sum);
})

app.get('/equals', (req, res) => {

    const input = req.query;
    console.log(req.query);
    const num = input['num'];
    const map = math.extract(num);

    
    //console.log(map);
    //console.log(num);

    //res.send("Sum : " + JSON.stringify(map));

    //Operation
    const sum = math.equal(map);
    console.log(sum);
    if (sum === 'Incorrect Input'){
        res.sendStatus(400);
    }
    else{
        //res.sendStatus(200);
        //console.log(sum);
        //console.log('Before send : '+sum);
        res.send({'result' : sum });
    }
    
})

app.listen(3000, () => {
    console.log('Calculator is listening');
})