import express from "express";

const app = express()

const PORT = process.env.PORT || 3000;

const mockUsers = [
    {user: "Pedro",  id: 1},
    {user: "Gustavo", id: 2},
    {user: "Alan", id: 3},
    ]

app.get("/", (req, res) => {
    res.status(201).send({msg:"Hello"})
})

app.get("/api/users", (req, res) => {
    res.send(mockUsers)
})

app.get("/api/users/:id", (req, res) => {
    // console.log(req.params.id); 
    const parsedId = parseInt(req.params.id)
    // console.log(parsedId);
    if (isNaN(parsedId)) 
        return res.status(400).send({msg: "Bad request. Invalid ID"})

    const findUser = mockUsers.find((user) => user.id === parsedId)
    if (!findUser) return res.sendStatus(404)
        return res.send(findUser)
    
})

app.get("/api/products/", (req, res) => {
    res.send([{id: 123, name: "chicken breast", price: 12.99}])
})

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
})