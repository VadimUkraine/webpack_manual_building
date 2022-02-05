FROM node:14.18.1

WORKDIR /nest

COPY package.json ./

RUN yarn install

COPY . .

CMD ["yarn", "server:dev"]