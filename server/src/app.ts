import express from "express";
import session from "express-session";
import cors from "cors";
import cookieParser from "cookie-parser";
import oauth from "oauth";
import { accessSecret } from "./accessSecret";
import {
    handleHomeTimeline,
    handleAuthRequest,
    handleAuthCallback,
} from "./requestHandlers";

export type LoginCache = {
    [id: string]: string;
};

export class App {
    private app: express.Application;
    private oauth: oauth.OAuth;
    private loginCache: LoginCache;

    constructor() {
        this.app = express();
        this.app.use(cors());
        this.app.use(cookieParser());
        this.app.use(session({ secret: "secret" }));
        accessSecret().then(secrets => {
            this.oauth = new oauth.OAuth(
                "https://api.twitter.com/oauth/request_token",
                "https://api.twitter.com/oauth/access_token",
                secrets.CONSUMER_KEY,
                secrets.CONSUMER_SECRET,
                "1.0",
                "https://api-5tvwyzuz5q-ue.a.run.app/auth/callback",
                "HMAC-SHA1"
            );
            this.initializeHandlers();
        });
    }

    private initializeHandlers = () => {
        this.app.get(
            "/home_timeline",
            handleHomeTimeline(this.oauth, this.loginCache)
        );
        this.app.get("/auth/login", handleAuthRequest(this.oauth));
        this.app.get(
            "/auth/callback",
            handleAuthCallback(this.oauth, this.loginCache)
        );
    };

    public listen = (port: number) => {
        this.app.listen(port, () => {
            console.log(`Server is listening to port ${port}`);
        });
    };
}
