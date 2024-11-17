import express, { response } from "express";

const app = express()

const PORT = process.env.PORT || 3000;

const mockUsers = [
    { username: "Pedro", displayName: "pedroxD",  id: 1},
    { username: "anson", displayName: "Anson", id: 2 },
    { username: "Ana", displayName: "skylover", id: 3 },
    { username: "Carlos", displayName: "techie", id: 4 },
    { username: "Julia", displayName: "artsy", id: 5 },
    { username: "Marcos", displayName: "gamerXP", id: 6 },
    { username: "Beatriz", displayName: "bookworm", id: 7 },
    { username: "Ricardo", displayName: "codeMaster", id: 8 },
] 

app.get("/", (req, res) => {
    res.status(201).send({ msg:"Hello" })
})

app.get("/api/users", (req, res) => {
    console.log(req.query);
    const { query: {filter, value} } = req;
    //  when filter and value are undefined
    if (!filter && !value) return res.send(mockUsers);

    if (filter && value) 
        return res.send(
            mockUsers.filter((user) => user[filter].includes(value))
        )
    return response.send(mockUsers)
});

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