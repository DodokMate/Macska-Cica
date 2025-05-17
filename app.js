const  express = require('express');
const  app = express();
const port = 3000;

app.use(express.json());

let termekek = [
    {id: 1, nev: "Kávé", ar: 500},  
    {id: 2, nev: "Tea", ar: 450},
    {id: 3, nev: "Kóla", ar: 750},
    {id: 4, nev: "Shake", ar: 800},
    {id: 5, nev: "Fanta", ar: 750},
    {id: 6, nev: "Fagyi", ar: 650},
    {id: 7, nev: "Fánk", ar: 300},
    {id: 8, nev: "Perec", ar: 1000},
    {id: 9, nev: "Lángos", ar: 1500},
    {id: 10, nev: "Kürtöskalács", ar: 950}
];

app.get('/termekek', (req, res) => {res.json(termekek);});

app.listen(port, () => {console.log(`API fut a ${port} porton!`)})