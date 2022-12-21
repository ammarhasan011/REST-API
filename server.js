const express = require('express');
const app = express();
const port = 3000

const products = require('./product.json');
console.log(products);

app.get('/', function (req, res) { res.send('Helo World! Personal') });


app.get('/api/products/:id', (req, res) => {
    const user = product.find(p => p.id === (req.params.id))
    if (!user)
        res.status(404).send('Not Found!')
    res.send(user)
});

app.get('/api/products', function (req, res) { res.send('Helloo worlddd12') });


app.post(() => { })


// res.status(200).send('Här är producten med id' + req.params.id)




app.listen(port, () => console.log('Server is up, your innnn!'));