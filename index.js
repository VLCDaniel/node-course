const express = require('express');
const bodyParser = require('body-parser');

// const handleElephantAPIRequest = require('./elephantAPI');
const { handleGreeting, otherValue } = require('./controllers/greeting');
const { port } = require('./config/express');
const authorizationMiddleware = require('./middlewares/authorization');
const loginHandler = require('./controllers/login');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require("./controllers/users");
const { getAllPosts, getPostById, createPost, addTagToPost, updatePost, deletePost } = require("./controllers/posts");


const app = express();
app.use(bodyParser.json());

app.post("/login", loginHandler);

app.get("/hello", authorizationMiddleware, handleGreeting);

app.get("/hello/:name?", authorizationMiddleware, handleGreeting);
// app.get("/elephant", handleElephantAPIRequest);

app.get("/users", getAllUsers);
app.get("/users/:id", getUserById);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
app.delete("/user/:id", deleteUser);

app.post("/users/:id/posts", createPost);

app.get("/posts", getAllPosts);
app.get("/posts/:id", getPostById);

app.post("/posts/:postId/tags/:tagId", addTagToPost);

app.post("/posts", createPost);
app.put("/posts/:id", updatePost);
app.delete("/post/:id", deletePost);


app.listen(port, () => {
    console.log("Server started on", port);
});