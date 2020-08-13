import Twitter from "twitter";

type HomeTimeline = {
    tweets: Twitter.ResponseData;
};

export const getHomeTimeline = async (
    client: Twitter,
    count: number
): Promise<HomeTimeline> => {
    const endpoint = "statuses/home_timeline";
    const params = {
        count: count,
    };
    const api_response = await client.get(endpoint, params);
    const response = {
        tweets: api_response,
    };
    return response;
};
