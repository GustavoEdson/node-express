import express, { response } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(201).send({ mgs: "Hello, world" });
});

app.get("/api/users", (req, res) => {
  res.send([
    { id: 1, username: "John Doe", age: 25, email: "john@example.com" },
    { id: 2, username: "Jane Smith", age: 30, email: "jane@example.com" },
    { id: 3, username: "Bob Johnson", age: 22, email: "bob@example.com" },
    { id: 4, username: "Alice Williams", age: 28, email: "alice@example.com" },
    { id: 5, username: "Charlie Brown", age: 32, email: "charlie@example.com" },
  ]);
});

app.get("/api/products", (req, res) => {
  res.send([{ id: 123, name: "Chicken breast", price: 12.99 }]);
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

// localhost:3000
