FROM node:lts-buster-slim AS builder

WORKDIR /build

COPY . .

RUN yarn install \
    && yarn dev \
    && rm -rf node_modules

FROM nginx:latest

COPY --from=builder /build/dist /usr/share/nginx/html/

