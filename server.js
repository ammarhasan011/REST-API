//Rest API, skapar med express
const express = require('express');
const fs = require("fs");
const app = express();
const port = 3000
app.use(express.json());



// //medelande
app.get('/', (req, res) => { res.send('Hello Hello') });





// /////////////////////////////////////////////////////////////////////// get /////////////////////////////////////////////////////

// //visar alla mina producter
app.get('/api/products/', (req, res) => {
    fs.readFile("./product.json", function (err, data) {
        let datan = JSON.parse(data)
        if (err) {
            res.status(404).send("hjälp mig jonas")
        }
        res.status(200).send(datan)
    })
});


//Hämtar en id från listan
app.get('/api/products/:id', (req, res) => {
    fs.readFile("./product.json", function (err, data) {
        let datan = JSON.parse(data)
        const user = datan.find(p => p.id == (req.params.id))
        if (err) {
            res.status(404).send("hjälp mig jonas")
        }
        res.status(200).send(user)
    })
});







/////////////////////////////////////////////////////////////////////// post /////////////////////////////////////////////////////
app.post('/api/products', (req, res) => {
    fs.readFile('./product.json', function (err, data) {
        let datan = JSON.parse(data);
        let postid = req.body;

        postid.id = datan.length + 1;
        console.log(datan);
        datan.push(postid);


        fs.writeFile("./product.json", JSON.stringify(datan, null, 2), function (err) {
            if (err) {
                res.status(404).send("fel");
            } else {

                res.status(201).send(postid);
            }
        })
    });
});






// res.status(200).send('Här är producten med id' + req.params.id)
///////////////////////////////////////////////////////////////////////// delete /////////////////////////////////////////////////////
// app.delete('/api/product/:id', (req, res) => {
//     const deleteid = products.find(p => p.id == (req.params.id))
//     if (deleteid)
//         products.indexOf(deleteid)
//     res.status(302).send('deleteid')
//     //else
//     // products.indexOf(deleteid)
//     res.status(404).send('Fail')
// })


/////////////////////////////////////////////////////////////////////// put /////////////////////////////////////////////////////


// app.put('/api/product/:id', (req, res) => {
//     fs.readFile("./product.json", function (err, data) {
//         res.status(404).send()
//     });
//     const putid = products
//     res.send('hej')
// })








app.listen(port, () => console.log('Server is up, your innnn!'))