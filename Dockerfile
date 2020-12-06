FROM gabcas28/ubuntu-docker-mocha

WORKDIR /usr/image-repository/
COPY *.json LICENSE assets ./

ENV NODE_ENV dev

RUN npm install .

CMD ["npm","test"]