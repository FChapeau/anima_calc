FROM node:6.9.2
EXPOSE 8081

COPY . /usr/src/app
RUN npm install
RUN npm install -g gulp
RUN gulp compile:client

CMD npm start