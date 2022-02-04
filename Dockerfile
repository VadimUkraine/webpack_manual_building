FROM node:14.18.1

WORKDIR /nest

COPY package.json ./

RUN yarn add

COPY . .

COPY ./server ./server

VOLUME ["/nest/backend", "/nest/frontend",]

CMD ["yarn", "start:dev"]