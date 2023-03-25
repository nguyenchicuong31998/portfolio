FROM node:16

WORKDIR /src

COPY package*.json yarn.lock ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8001

CMD ["npm", "start"]

