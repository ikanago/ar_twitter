import express from "express";
import Twitter from "twitter";
import { getHomeTimeline } from "./accessTwitterAPI.js";

const app = express();
const client = new Twitter ({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

const port = 8080;
const server = app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});

app.get("/home_timeline", (req, res, _next) => {
    let count = NaN;
    if (req.query && typeof req.query.count === "string") {
        count = parseInt(req.query.count);
        if (isNaN(count)) {
            return res.status(422).json({
                error: "count must be integer",
            });
        }
    }

    getHomeTimeline(client, count)
        .then(body => {
            res.json(body);
        })
        .catch(err => {
            console.error(err);
            res.sendStatus(404);
        });
})

