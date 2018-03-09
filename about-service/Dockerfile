FROM node:9.5.0-alpine

RUN mkdir -p /src/app/about

WORKDIR /src/app/about

COPY . /src/app/about

RUN npm install

RUN npm install -g nodemon

RUN npm install -g webpack

EXPOSE 1128

CMD [ "npm", "start" ]

CMD [ "npm", "run", "server" ]
