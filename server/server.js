const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

var monngoURL = "mongodb://mongo-service/database";

app.use(
    cors({
        origin: "*",
    })
);

app.get("/api", (req, res) => {
    res.send({
        data: "Examen2 de Kubernettes Escalabs K8s Kates!",
    });
});

mongoose
    .connect(monngoURL, { useNewUrlParser: true })
    .then(() => {
        console.log("Conectado a Mongo");
    })
    .catch((error) => {
        console.log("Fallo Conexion a mongoDB");
        console.log(monngoURL);
    });

app.listen(3000, function() {
    console.log("listening on 3000");
});
