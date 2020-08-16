import oauth from "oauth";

type RequestTokens = {
    oauth_token: string;
    oauth_token_secret: string;
    results: any;
};

type AccessTokens = {
    oauth_access_token: string;
    oauth_access_token_secret: string;
    results: any;
};

/**
 * Get timeline of the user authenticate with given Access Token.
 * @param oauthClient
 * @param oauthAccessToken
 * @param oauthAccessTokenSecret
 * @param count How many tweets to get
 */
const getHomeTimeline = (
    oauthClient: oauth.OAuth,
    oauthAccessToken: string,
    oauthAccessTokenSecret: string,
    count: number
) => {
    return new Promise((resolve, reject) => {
        const url = `https://api.twitter.com/1.1/statuses/home_timeline.json?count=${count}`;
        oauthClient.get(
            url,
            oauthAccessToken,
            oauthAccessTokenSecret,
            (error, result, _response) => {
                if (error && error.statusCode !== 200) {
                    reject(new Error(`${error.data}`));
                } else {
                    resolve(JSON.parse(result.toString()));
                }
            }
        );
    });
};

const getOAuthRequestToken = async (
    oauthClient: oauth.OAuth
): Promise<RequestTokens> => {
    return new Promise((resolve, reject) => {
        oauthClient.getOAuthRequestToken(
            (error, oauth_token, oauth_token_secret, results) => {
                if (error) {
                    reject(new Error("Could not initialize authorization"));
                } else {
                    resolve({ oauth_token, oauth_token_secret, results });
                }
            }
        );
    });
};

const getOAuthAccessToken = async (
    oauthClient: oauth.OAuth,
    oauth_token: string,
    oauth_token_secret: string,
    oauth_token_verifier: string
): Promise<AccessTokens> => {
    return new Promise((resolve, reject) => {
        oauthClient.getOAuthAccessToken(
            oauth_token,
            oauth_token_secret,
            oauth_token_verifier,
            (error, oauth_access_token, oauth_access_token_secret, results) => {
                if (error) {
                    reject(new Error("Could not complete authorization"));
                } else {
                    resolve({
                        oauth_access_token,
                        oauth_access_token_secret,
                        results,
                    });
                }
            }
        );
    });
};

export { getOAuthAccessToken, getOAuthRequestToken, getHomeTimeline };
