FROM node:14.18.1

WORKDIR /nest

COPY package.json ./

RUN yarn install

COPY . .

COPY ./server ./server

VOLUME ["/nest/backend"]

CMD ["yarn", "server:dev"]