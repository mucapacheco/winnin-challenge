FROM node As development

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

FROM node as production

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
