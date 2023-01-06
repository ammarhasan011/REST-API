//Rest API, skapar med express
const express = require('express');
const fs = require("fs");
const app = express();
const port = 3000
const cors = require('cors')

app.use(express.json());
app.use(cors());



//medelande
app.get('/', (req, res) => { res.send('Hello World') })


///////////////////////////////////////////////////////////////////////// get /////////////////////////////////////////////////////
//Visar alla mina producter
app.get('/api/products/', (req, res) => {
    fs.readFile("./product.json", function (err, data) {
        let datan = JSON.parse(data)
        if (err) {
            res.status(404).send("Cannot display info!")
        }
        res.status(200).send(datan)
    })
})


//Hämtar en id från listan
app.get('/api/products/:id', (req, res) => {
    fs.readFile("./product.json", function (err, data) {
        let datan = JSON.parse(data)
        const user = datan.find(p => p.id == (req.params.id))
        if (err) {
            res.status(404).send("Cannot display info!")
        }
        res.status(200).send(user)
    })
})



/////////////////////////////////////////////////////////////////////// post /////////////////////////////////////////////////////
//lägger till en ny product
app.post('/api/products', (req, res) => {
    fs.readFile('./product.json', function (err, data) {
        let datan = JSON.parse(data)
        let postid = req.body

        postid.id = datan.length + 1
        console.log(datan)
        datan.push(postid)

        fs.writeFile("./product.json", JSON.stringify(datan, null, 2), function (err) {
            if (err) {
                res.status(404).send("errorrrrr")
            } else {
                res.status(201).send(postid)
            }
        })
    })
})


///////////////////////////////////////////////////////////////////////// delete /////////////////////////////////////////////////////
//tar bort en product
app.delete('/api/products/:id', (req, res) => {
    fs.readFile("./product.json", function (err, data) {
        let datan = JSON.parse(data)
        const deleteid = datan.find(p => p.id == (req.params.id))
        if (deleteid) {
            const index = datan.indexOf(deleteid)
            // datan.slice(4);
            datan.splice(index, 1)
            res.status(200).send(deleteid)
        } else {
            res.status(404)
        }


        fs.writeFile("./product.json", JSON.stringify(datan, null, 2), function (err) {
            if (err) {
                res.status(404).send("Cannot delete info!")
            } else {
                res.status(200).send(deleteid)
            }
        })
    })
})

/////////////////////////////////////////////////////////////////////// put /////////////////////////////////////////////////////
//uppdaterar och ändrar på en product
app.put('/api/products/:id', (req, res) => {
    fs.readFile("./product.json", function (err, data) {
        const datan = JSON.parse(data)

        //kolla att vi har producten 
        const product = datan.find(p => p.id == (req.params.id))
        if (!product) {
            res.status(404).send("the product does not exist")
        }

        product.name = req.body.name
        product.price = req.body.price
        product.size = req.body.size
        res.send(product)


        fs.writeFile('./product.json', JSON.stringify(datan, null, 2), function (err) {
            if (err) {
                console.log("Failed to update id!!")
                res.status(404).send(err)
            } else {
                res.status(200).send("updated id" + product)
            }
        })
    })
})

////////////////////////////////////////////////////////////////////// VG /////////////////////////////////////////////////////
//för att skippa express-generator
app.use(
    express.urlencoded({
        extended: true,
    })
)





app.listen(port, () => console.log('Server is up, your innnn!'))