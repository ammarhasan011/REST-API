/////////////////////////////////////////////////////////////////G-delen////////////////////////////////////////////////////////////////////

/////////////////title 

//////////////////////beskrivning av project 


typ av resurs 
varje product har 4 st egenskaper 
min data är skapad i en json fil "product.json"
använder github sedan .gitignore node_modules
jag testar min api använder jag en tilläg i VS Code kallad för "REST Client".

//////////////////vilka krav som är uppfyllda 

1. Projekten innehåller minst 4 st endpoints.
2. Mina endpoints nås via en REST Client fil.
3. Min data är sparad i en JSON fil "product.json"
4. Datan uppdateras när något tas bort, upptaders eller läggs till.
5. ////////////API-et svara med 404 om datan saknas.
6. Git & GitHub använts.
7. Projektmappen innehåller en README.md fil.


//////////////////info om hur projektet byggs och körs


Jag börjar med att skapa en REST-API i NodeJS med express.
Jag skapar 6 st endpoints get, get, get, post, delete och put.

1. I min första get har jag ett medelande bara "Hello World" som kommer upp i http://localhost:3000
2. I andra get:en visas alla mina producter, man kan se det i http://localhost:3000/api/products
3. I trejde get:en visas en specifik id exempelvis http://localhost:3000/api/products/1
4. I post så lägger jag till en ny product med id och namn osv.
5. I delete tar jag bort en product genom att bestämma vilken id ska bort.
6. Och sist men inte minst så använder jag put för att uppdatera nån viss egenskaper i en product.


/////////////////////////////////////////////////////////////////VG-delen////////////////////////////////////////////////////////////////////
1. Alla punkter i G-delen är uppfyllda.
2. 
3. 