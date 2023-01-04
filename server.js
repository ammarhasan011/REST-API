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






///////////////////////////////////////////////////////////////////////// delete /////////////////////////////////////////////////////
app.delete('/api/products/:id', (req, res) => {
    fs.readFile("./product.json", function (err, data) {
        let datan = JSON.parse(data)
        const deleteid = datan.find(p => p.id == (req.params.id))
        if (deleteid) {

            const index = datan.indexOf(deleteid)
            // datan.slice(4);
            datan.splice(index, 1)
            res.status(302).send(deleteid)
        } else {
            res.status(404)
        }

        fs.writeFile("./product.json", JSON.stringify(datan, null, 2), function (err) {
            if (err) {
                res.status(404).send("fel")
            } else {

                res.status(201).send(deleteid)
            }
        })
    })
})

/////////////////////////////////////////////////////////////////////// put /////////////////////////////////////////////////////


app.put('/api/products/:id', (req, res) => {
    fs.readFile("./product.json", function (err, data) {
        const datan = JSON.parse(data)

        //kolla att vi har producten 
        const product = datan.find(p => p.id == (req.params.id))
        if (!product) {
            res.status(404).send("producten finns inte")
        }

        product.name = req.body.name
        product.lastname = req.body.lastname
        res.send(product)


        fs.writeFile('./product.json', JSON.stringify(datan, null, 2), function (err) {
            if (err) {
                console.log("Gick inte att uppdatera id!")
                res.status(404).send(err)

            } else {
                res.status(200).send("uppdaterad id" + product)
            }
        })
    });
})








app.listen(port, () => console.log('Server is up, your innnn!'))