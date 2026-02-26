// Import Express

import express from "express";

// Initialize the Express application

const app = express();

// Set the port
const PORT = 3000;

// Middleware to parse JSON data

app.use(express.json());

// Routes
// Set up a basic route

app.get("/", (req, res) => {
  res.send ("Welcome to our API!");
});

// Get /Users
app.get ("/users", (req,res) => {
  const users = [
    { id:1, name: "John Doe"},
    { id:2, name: "Jane Smith"}
  ];
res.json (users);
});

// Post /users

  app.post("/users", (req,res) => {
    const newUser =  req.body;
    console.log(newUser);
    res.status(201).json({
      message: "User added successfullt!", user:newUser
    });
  });

  
//___________PRACTICE ASSIGNMENT

// Get /greet

app.use(express.json());
app.get("/greet", (req,res) => {
  res.send("Hello, developer!");
});

// POST /submit
app.post("/submit", (req, res) => {
  const {name,age} = req.body;

  res.status(201).json({
    message: `Hello, ${name}! your age is ${age} years old`
});
});

// START SERVER

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});









  

  