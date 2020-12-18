FROM gabcas28/ubuntu-docker-mocha

WORKDIR /app
COPY *.json assets ./

ENV NODE_ENV dev

RUN npm install .

RUN useradd -m tester
USER tester

CMD npm test