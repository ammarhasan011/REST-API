//Rest API, skapar med express
const { json } = require('express');
const express = require('express');
const app = express();
const port = 3000
const fs = require("fs");

const newid = [

    {
        "id": 5,
        "name": "Molgan",
        "lastname": "Johansson",
        "age": "20",
        "längd": "120"
    }
];

//medelande
app.get('/', (req, res) => { res.send('Hello Hello') });

//kopplar till min product.json
const products = require('./product.json');
console.log(products);





//visar alla mina id:s
app.get('/api/products/', (req, res) => {
    res.status(200).send(products)
});


//Hämtar en id från listan
app.get('/api/products/:id', (req, res) => {
    const user = products.find(p => p.id == (req.params.id))
    if (!user)
        res.status(400).send('Not Found!')
    res.send(user)
});








app.post('/api/products', (req, res) => {
    let postid = req.body;
    postid.id = products.length + 1;

    products.push(postid);

    var postid2 = JSON.stringify(products, null, 2);
    fs.writeFile("./product.json", postid2, (err) => {
        if (err) throw err;
        console.log("new id added");
    });
    res.status(201).send(postid);





    //name: req.body.name

    // products.push(postid);
    // res.send(postid)
});
// const postid = require('newid');
// if (!postid)
//     res.status(404).send('fan oxå')




// res.status(200).send('Här är producten med id' + req.params.id)
//
app.delete('/api/product/:id', (req, res) => {
    const deleteid = products.find(p => p.id == (req.params.id))
    if (deleteid)
        products.indexOf(deleteid)
    res.status(302).send('deleteid')
    //else
    // products.indexOf(deleteid)
    res.status(404).send('Fail')
})



// app.PUT('//api/product/:id', (req, res) => {
//     const putid = products
//     res.send('hej')
// })








app.listen(port, () => console.log('Server is up, your innnn!'));