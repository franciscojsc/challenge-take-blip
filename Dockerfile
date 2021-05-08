FROM node:alpine

WORKDIR /usr/app

COPY ./Api/package*.json ./

RUN npm install

COPY ./Api .

COPY --chown=node:node ./Api .

EXPOSE 3000

USER node

CMD ["npm", "start"]
