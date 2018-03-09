FROM node:9.5.0-alpine

RUN mkdir -p /src/app/seed-pg

WORKDIR /src/app/seed-pg

COPY . /src/app/seed-pg

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

RUN npm install

Run node database/seed.js

CMD [ "node", "database/seed.js" ]
