FROM node:14.17.1-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

ENV PORT=5000

EXPOSE $PORT

CMD [ "npm", "run", "dev"]