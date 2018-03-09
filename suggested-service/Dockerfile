FROM node:9.5.0-alpine

RUN mkdir -p /src/app/suggested

WORKDIR /src/app/suggested

COPY . /src/app/suggested

RUN npm install

RUN npm install -g nodemon

RUN npm install -g webpack

Run npm run seed

EXPOSE 6001

CMD [ "npm", "run", "seed" ]

CMD [ "npm", "run", "build" ]

CMD [ "npm", "start" ]