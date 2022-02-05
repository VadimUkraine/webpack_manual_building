FROM node:14.18.1

WORKDIR /react

COPY package.json ./

RUN yarn install

COPY . .

CMD ["yarn", "dev"]