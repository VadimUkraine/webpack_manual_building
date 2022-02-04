FROM node:14.18.1

WORKDIR /react

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 4200

VOLUME ["/react/client"]

CMD ["yarn", "dev"]