FROM node

WORKDIR /usr/image-repository/
COPY *.json cc.yaml LICENSE ./
COPY src ./src/

RUN npm install

CMD ["npm","start"]