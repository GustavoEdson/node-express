import express, { response } from "express";
import cors from "cors";

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, username: "John Doe", age: 25, email: "john@example.com" },
  { id: 2, username: "Jane Smith", age: 30, email: "jane@example.com" },
  { id: 3, username: "Bob Johnson", age: 22, email: "bob@example.com" },
  { id: 4, username: "Alice Williams", age: 28, email: "alice@example.com" },
  { id: 5, username: "Charlie Brown", age: 32, email: "charlie@example.com" },
];

app.get("/", (req, res) => {
  res.status(201).send({ msg: "Hello!" });
});

app.get("/api/users", (req, res) => {
  res.send(mockUsers);
});

app.get("/api/users/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) return res.sendStatus(400);

  const findUser = mockUsers.find((user) => user.id === parsedId);
  if (!findUser) return res.sendStatus(404);
  return res.send(findUser);
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

// localhost:3000
