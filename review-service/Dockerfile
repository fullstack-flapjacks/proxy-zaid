FROM node:9.5.0-alpine

RUN mkdir -p /src/app/review

WORKDIR /src/app/review

COPY . /src/app/review

RUN npm install

RUN npm install -g nodemon

RUN npm install -g webpack

EXPOSE 4008

CMD [ "npm", "run", "build1" ]

CMD [ "npm", "run", "server" ]
