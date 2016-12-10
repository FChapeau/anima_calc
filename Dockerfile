FROM node:6.9.2
EXPOSE 8081

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install
RUN ./node_modules/.bin/gulp compile:client

CMD npm start