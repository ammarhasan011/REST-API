const express = require('express');
//const color = require('color');
const app = express();


app.listen(3000, () => console.log('Server is up, your innnn!'));

// app.get('/api/products', () => { })

app.get('/', function (req, res) { res.send('Helloo worldd123') });
