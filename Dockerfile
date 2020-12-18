FROM gabcas28/ubuntu-node-mocha

WORKDIR /app
COPY *.json assets ./

ENV NODE_ENV dev

RUN npm install .

RUN useradd -ms /bin/bash tester
USER tester

CMD npm test