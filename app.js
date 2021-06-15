const express = require('express')
var fs = require('fs');
var path = require('path');

var jsonPath = path.join(__dirname, '.', 'config', 'dev', 'foobar.json');
var jsonString = fs.readFileSync(jsonPath, 'utf8');
const port = 3000

const app = express()

app.get('/', (req, res) => {
    res.send('Pong')
})

app.get('/chl-latest', (req, res) => {
    res.sendFile('./models/chl_nn_minispect.tflite')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})