import express from "express";
import Twitter from "twitter";
import { accessSecret } from "./accessSecret";
import { handleHomeTimeline } from "./requestHandlers";

export class App {
    public app: express.Application;
    private twitterClient: Twitter;

    constructor() {
        this.app = express();
        accessSecret().then(secrets => {
            this.twitterClient = new Twitter({
                consumer_key: secrets.CONSUMER_KEY,
                consumer_secret: secrets.CONSUMER_SECRET,
                access_token_key: secrets.ACCESS_TOKEN_KEY,
                access_token_secret: secrets.ACCESS_TOKEN_SECRET,
            });
            this.initializeHandlers();
        });
    }

    private initializeHandlers = () => {
        this.app.get("/home_timeline", handleHomeTimeline(this.twitterClient));
    };

    public listen = (port: number) => {
        this.app.listen(port, () => {
            console.log(`Server is listening to port ${port}`);
        });
    };
}
