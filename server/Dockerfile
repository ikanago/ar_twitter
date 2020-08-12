FROM node:lts-buster-slim

WORKDIR /app

COPY package.json tsconfig.json ./

RUN yarn install --prodution=true \
    && mkdir -p src dist

COPY src/ /app/src/

RUN yarn build

CMD ["node", "dist"]
