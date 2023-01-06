/////////////////////////////////////////////////////////////////G-delen////////////////////////////////////////////////////////////////////



/////////////////title/////////////////

Hasan TV AB :)

/////////////////beskrivning av project/info om hur projektet byggs och körs/////////////////
När man klonar ner projectet så ska man installera npm install då laddas node_moduls ner för att kunna köra projectet corecct.

I min project så har jag olika producter "Tv:s" i en json fil, 

typ av resurs 
varje product har 4 st egenskaper 
min data är skapad i en json fil "product.json"
använder github sedan .gitignore node_modules
jag testar min api använder jag en tilläg i VS Code kallad för "REST Client".

nodemon för start och uppdatera direkt istället för node server.js

Jag börjar med att skapa en REST-API i NodeJS med express.
Jag installerar express i terminalen sedan använder jag npm start för att starta min server.
Jag skapar 6 st endpoints get, get, get, post, delete och put.

1. I min första get har jag ett medelande bara "Hello World" som kommer upp i http://localhost:3000
2. I andra get:en visas alla mina producter, man kan se det i http://localhost:3000/api/products
3. I trejde get:en visas en specifik id exempelvis http://localhost:3000/api/products/1
4. I post så lägger jag till en ny product med namn, pris, storlek osv.
5. I delete tar jag bort en product genom att bestämma vilken id ska bort.
6. Och sist men inte minst så använder jag put för att uppdatera några egenskaper i en product som namn, pris och storlek.




/////////////////vilka krav som är uppfyllda/////////////////

Mina krav som är uppfyllda:
1. Projekten innehåller minst 4 st endpoints.
2. Mina endpoints nås via en REST Client fil.
3. Min data är sparad i en JSON fil "product.json"
4. Datan uppdateras när något tas bort, upptaders eller läggs till.
5. ////////////API-et svara med 404 om datan saknas.
6. Git & GitHub använts.
7. Projektmappen innehåller en README.md fil.


/////////////////////////////////////////////////////////////////VG-delen////////////////////////////////////////////////////////////////////
1. Alla punkter i G-delen är uppfyllda.
2. 
3. 