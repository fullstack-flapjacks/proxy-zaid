FROM node:9.5.0-alpine

RUN mkdir -p /src/app/proxy

WORKDIR /src/app/proxy

COPY . /src/app/proxy

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

RUN npm install

RUN npm install -g nodemon

EXPOSE 3000

CMD [ "npm", "run", "server" ]

