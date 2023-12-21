import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Pozdrav u browser');
    console.log('di si konzola a?');
  });

app.post("/signup", (req, res) => {
    //...
})

app.post("/login", (req, res) => {
    //...
})

app.post("/pacijent/odabirbolesti", (req, res) => {
    //...
})

app.post("/pacijent/odabirbolesti/upissimptoma", (req, res) => {
    //...
})

app.post("/pacijent/odabirbolesti/upissimptoma/odabirdoktora", (req, res) => {
    //...
})

app.post("/pacijent/ocijenidoktora", (req, res) => {
    //...
})

app.get("/pacijent/pregledtermina", (req, res) => {
    //...
})

app.get("/pacijent/pregledprofila", (req, res) => {
    //...
})

app.patch("/pacijent/urediprofil", (req, res) => {
    //...
})

app.post("/doktor/upisnalaza", (req, res) => {
    //...
})

app.get("/doktor/pregledprofila", (req, res) => {
    //...
})

app.patch("/doktor/urediprofil", (req, res) => {
    //...
})

app.get("/doktor/pregledtermina", (req, res) => {
    //...
})

app.get("/doktor/pregledpacijenta", (req, res) => {
    //...
})

app.get("/doktor/pregledocijena", (req, res) => {
    //...
})



  app.listen(port, () => {
	console.log(`Servis radi na portu ${port}`);
});