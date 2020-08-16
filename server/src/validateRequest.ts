import * as express from "express";

type HomeTimelineRequest = {
    count: number;
};

class ValidationError {
    public error: string;
    constructor(error: string) {
        this.error = error;
    }
}

/*
 * Validate URL encoded query in a request.
 * If it is unable to parse correctly, returns error.
 */
const validateHomeTimeline = (
    request: express.Request
): HomeTimelineRequest | ValidationError => {
    if (typeof request.query.count !== "string") {
        return { count: 20 };
    }
    const count = parseInt(request.query.count);
    if (isNaN(count)) {
        return new ValidationError("Parameter 'count' must be integer");
    }
    return {
        count: count,
    };
};

export { HomeTimelineRequest, ValidationError, validateHomeTimeline };