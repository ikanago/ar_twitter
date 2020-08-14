import express from "express";
import Twitter from "twitter";
import { getHomeTimeline } from "./accessTwitterAPI";
import { accessSecret } from "./accessSecret";
import { ValidationError, validateHomeTimeline } from "./validateRequest";

const main = async () => {
    const app = express();
    const secrets = await accessSecret();
    const client = new Twitter({
        consumer_key: secrets.CONSUMER_KEY,
        consumer_secret: secrets.CONSUMER_SECRET,
        access_token_key: secrets.ACCESS_TOKEN_KEY,
        access_token_secret: secrets.ACCESS_TOKEN_SECRET,
    });

    const router = express.Router();
    router.get("/home_timeline", (req, res, _next) => {
        const query = validateHomeTimeline(req);
        if (query instanceof ValidationError) {
            console.error(query.error);
            res.status(422).json(query);
        } else {
            getHomeTimeline(client, query.count)
                .then(body => {
                    res.json(body);
                })
                .catch(err => {
                    console.error(err);
                    res.status(500);
                });
        }
    });

    const port = 8080;
    app.use("/", router);
    app.listen(port, () => {
        console.log(`Server is listening to port ${port}`);
    });
};

main();
