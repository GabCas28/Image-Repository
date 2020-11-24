FROM node:14-alpine

WORKDIR /usr/image-repository/
COPY . ./

ENV NODE_ENV dev

RUN npm install .\
    npm install -g mocha

CMD ["npm","test"]