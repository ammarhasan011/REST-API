const express = require('express');
//const color = require('color');
const app = express();
const port = 3000

app.get('/', function (req, res) { res.send('Helloo worldd') });
app.get('/api/products', () => { })

app.post(() => { })

app.listen(port, () => console.log('Server is up, your innnn!'));

// get
// delete
// put
// post
