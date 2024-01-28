FROM node:12

ARG SERVICE_NAME

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENV PORT=8080

CMD ["npm", "start"]