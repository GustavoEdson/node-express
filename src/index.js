import express from "express";

const app = express()

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(201).send({msg:"Hello"})
})


app.get("/api/users", (req, res) => {
    res.statusCode(201).send([
    {user: "Pedro",  id: "423gvh23k43242"},
    {user: "Gustavo", id: "423gvh23k43242"},
    {user: "Alan", id: "423gvh23k43242"},
    ])
})

app.get("/api/products", (req, res) => {
    res.send([
        {id: 125, name:"chicken breast", price: 12.99},
        {id: 125, name:"chicken breast", price: 12.99},
        {id: 125, name:"chicken breast", price: 12.99}])
})

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
})