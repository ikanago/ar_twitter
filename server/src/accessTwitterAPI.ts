import type Twitter from "twitter";

type HomeTimeline = {
    tweets: Twitter.ResponseData;
};

export const getHomeTimeline = async (
    client: Twitter,
    count: number
): Promise<HomeTimeline> => {
    const endpoint = "statuses/home_timeline";
    const params = {
        count: clamp(count, 0, 200),
    };
    const api_response = await client.get(endpoint, params);
    const response = {
        tweets: api_response,
    };
    return response;
};

/*
 * Check if the value is within a specific range.
 * If not, the value is rounded into the nearest boundary.
 */
const clamp = (value: number, minimum: number, maximum: number): number => {
    if (value < minimum) {
        return minimum;
    } else if (value > maximum) {
        return maximum;
    }
    return value;
};
