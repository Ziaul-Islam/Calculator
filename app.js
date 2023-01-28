


const math = require('./math.js');
const express = require('express');
const app = express();


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
    //console.log(req.query);
    const num = input['num'];
    const map = math.extract(num);

    
    //console.log(map);
    //console.log(num);

    //res.send("Sum : " + JSON.stringify(map));
    res.send("SUM : "+math.equal(map));
})

app.listen(3000, () => {
    console.log('Calculator is listening');
})