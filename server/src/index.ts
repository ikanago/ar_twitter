import express from "express";
const app = express();

const port = 8080
const server = app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});

const payload = {
    tweets: "Pong",
};

app.get("/ping", (_req, res, _next) => {
    res.json(payload);
})
