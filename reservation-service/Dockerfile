FROM node:9.5.0-alpine

RUN mkdir -p /src/app/reservation

WORKDIR /src/app/reservation

COPY . /src/app/reservation

RUN npm install

RUN npm install -g nodemon

RUN npm install -g webpack

#RUN node database/seed.js

EXPOSE 2003

CMD [ "node", "database/seed.js" ]

CMD [ "npm", "run", "build" ]

CMD [ "npm", "start" ]

