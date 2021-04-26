FROM node:13-alpine

WORKDIR /usr/app

COPY package.json ./

RUN yarn

COPY . .

CMD ["yarn", "start"]
