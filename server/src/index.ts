import express from "express";
import Twitter from "twitter";
import { getHomeTimeline } from "./accessTwitterAPI.js";
import { accessSecret } from "./accessSecret.js";

const main = async () => {
    const app = express();
    const secrets = await accessSecret();
    const client = new Twitter({
        consumer_key: secrets.CONSUMER_KEY,
        consumer_secret: secrets.CONSUMER_SECRET,
        access_token_key: secrets.ACCESS_TOKEN_KEY,
        access_token_secret: secrets.ACCESS_TOKEN_SECRET,
    });

    const port = 8080;
    app.listen(port, () => {
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
    });
};

main();
