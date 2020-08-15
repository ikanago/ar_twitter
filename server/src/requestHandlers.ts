import type * as express from "express";
import oauth from "oauth";
import { ValidationError, validateHomeTimeline } from "./validateRequest";
import {
    getOAuthAccessToken,
    getOAuthRequestToken,
    getHomeTimeline,
} from "./oauthHelper";

/**
 * Handle request coming to '/home_timeline'.
 */
const handleHomeTimeline = (
    oauthClient: oauth.OAuth
): express.RequestHandler => {
    return (request, response) => {
        const {
            oauth_access_token: oauthAccessToken,
            oauth_access_token_secret: oauthAccessTokenSecret,
        } = request.session;
        if (!oauthAccessToken || !oauthAccessTokenSecret) {
            response.status(401).json({ error: "You are not autherized" });
            return;
        }
        const query = validateHomeTimeline(request);
        if (query instanceof ValidationError) {
            response.status(422).json(query);
            return;
        }
        const tweets = getHomeTimeline(
            oauthClient,
            oauthAccessToken,
            oauthAccessTokenSecret,
            query.count
        );
        response.json({
            tweets: tweets,
        });
    };
};

const handleAuthRequest = (
    oauthClient: oauth.OAuth
): express.RequestHandler => {
    return async (request, response) => {
        const {
            oauth_token: oauthToken,
            oauth_token_secret: oauthTokenSecret,
            results,
        } = await getOAuthRequestToken(oauthClient);
        console.log(oauthToken, oauthTokenSecret);
        console.log(request.session);
        request.session.oauth_token = oauthToken;
        request.session.oauth_token_secret = oauthTokenSecret;
        response.redirect(
            `https://twitter.com/oauth/authenticate?oauth_token=${oauthToken}`
        );
    };
};

const handleAuthCallback = (
    oauthClient: oauth.OAuth
): express.RequestHandler => {
    return async (request, response, next) => {
        const {
            oauth_token: oauthToken,
            oauth_token_secret: oauthTokenSecret,
        } = request.session;
        const { oauth_verifier: oauthVerifier } = request.query;
        if (typeof oauthVerifier !== "string") {
            response.status(500);
            return;
        }
        const {
            oauth_access_token: oauthAccessToken,
            oauth_access_token_secret: oauthAccessTokenSecret,
            results,
        } = await getOAuthAccessToken(
            oauthClient,
            oauthToken,
            oauthTokenSecret,
            oauthVerifier
        );
        request.session.oauth_access_token = oauthAccessToken;
        request.session.oauth_access_token_secret = oauthAccessTokenSecret;
        request.session.save(() => response.redirect("https://ar-twitter.netlify.app/app.html"));
    };
};

export { handleHomeTimeline, handleAuthRequest, handleAuthCallback };
