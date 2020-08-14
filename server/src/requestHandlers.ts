import type * as express from "express";
import type Twitter from "twitter";
import { getHomeTimeline } from "./accessTwitterAPI";
import { ValidationError, validateHomeTimeline } from "./validateRequest";

const handleHomeTimeline = (client: Twitter): express.RequestHandler => {
    return (request, response) => {
        const query = validateHomeTimeline(request);
        if (query instanceof ValidationError) {
            console.error(query.error);
            response.status(422).json(query);
        } else {
            getHomeTimeline(client, query.count)
                .then(body => {
                    response.json(body);
                })
                .catch(err => {
                    console.error(err);
                    response.status(500);
                });
        }
    };
};

export { handleHomeTimeline };
