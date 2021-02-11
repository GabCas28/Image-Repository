FROM gabcas28/ubuntu-node-mocha

WORKDIR /app

COPY package.json /app

COPY ./src/gateway/ /app/src/gateway/

COPY ./src/common/ /app/src/common/

RUN npm install . && npm install -g nodemon uuid

CMD nodemon /app/src/gateway/index.ts