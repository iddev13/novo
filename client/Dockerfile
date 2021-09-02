FROM node:14.17.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY public public

COPY src src

RUN npm run build

