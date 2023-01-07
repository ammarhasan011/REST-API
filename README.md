/////////////////////////////////////////////////////////////////G-delen////////////////////////////////////////////////////////////////////
/////////////////title/////////////////

Hasan TV AB :)

/////////////////beskrivning av project/info om hur projektet byggs och körs/////////////////

Jag börjar med att skapa en REST-API i NodeJS med express.

I min project så har jag olika producter "Tv:s" i en json fil product.json, varje product har 4 st egenskaper och i min server.js har jag olika endpoints som har olika funcktioner. 

1. I min första get har jag ett medelande bara "Hello World" som kommer upp i http://localhost:3000
2. I andra get:en visas alla mina producter, man kan se det i http://localhost:3000/api/products
3. I trejde get:en visas en specifik id exempelvis http://localhost:3000/api/products/1
4. I post så lägger jag till en ny product med namn, pris, storlek osv.
5. I delete tar jag bort en product genom att bestämma vilken id ska bort.
6. Och sist men inte minst så använder jag put för att uppdatera några egenskaper i en product som namn, pris och storlek.

I products.rest testar jag mina olika endpoints och kollar om jag får felmedelande 404 eller om det blir godkänt 202, med hjälp av en tilläg i VS Code kallad för "REST Client". I package.json kan man se att jag ändrade start till "nodemon server.js", för att slippa uppadera servern om och om. Projecten är kopplad till github och git används däeför skapar jag en .gitignore fil för att inte ha med alla node_modules.






När man klonar ner projectet så ska man köra npm install i terinalen för att ladda ner node_moduls för att kunna köra projectet corecct.





nodemon för start och uppdatera direkt istället för node server.js

Jag börjar med att skapa en REST-API i NodeJS med express.
Jag installerar express i terminalen sedan använder jag npm start för att starta min server.
Jag skapar 6 st endpoints get, get, get, post, delete och put.





/////////////////vilka krav som är uppfyllda/////////////////

Jag uppfyller alla krav, mina klarade krav är:

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