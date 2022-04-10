import express from "express";

const app = express();

app.use('/', (req, res) => {
    res.send("Hola mundo xd xd xd xd xd")
})

app.listen(4000, () => {
    console.log("Ervidor funcionado en el puerto 4000")
});