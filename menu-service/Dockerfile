FROM node:9.5.0-alpine

RUN mkdir -p /src/app/menu

WORKDIR /src/app/menu

COPY . /src/app/menu

RUN npm install

RUN npm install -g nodemon

RUN npm install -g webpack

EXPOSE 6600

CMD [ "npm", "start" ]

CMD [ "npm", "run", "server" ]
