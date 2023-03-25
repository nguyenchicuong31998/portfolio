FROM node:14

WORKDIR ./app

EXPOSE 8001

COPY . .

RUN yarn install

CMD ["yarn", "start"]

