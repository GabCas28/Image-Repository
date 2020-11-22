FROM node:14-alpine

WORKDIR /usr/image-repository/
COPY package.json cc.yaml LICENSE ./
COPY src ./src/
COPY assets ./assets/

ENV NODE_ENV dev

RUN npm install .\
    npm install -g mocha
    
CMD ["npm","test"]