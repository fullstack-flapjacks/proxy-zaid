FROM node:9.5.0-alpine

RUN mkdir -p /src/app/seed-mongodb

WORKDIR /src/app/seed-mongodb

COPY . /src/app/seed-mongodb

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

RUN npm install

#Run node database/seed.js

CMD [ "node", "database/seed.js" ]
