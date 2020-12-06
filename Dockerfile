FROM gabcas28/ubuntu-docker-mocha

WORKDIR /app
COPY *.json LICENSE assets src ./

ENV NODE_ENV dev

RUN npm install .

CMD ["npm","test"]