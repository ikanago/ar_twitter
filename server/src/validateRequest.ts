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
    const parsed: HomeTimelineRequest = {
        count: count,
    };
    return parsed;
};

export { HomeTimelineRequest, ValidationError, validateHomeTimeline };
