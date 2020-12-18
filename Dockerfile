FROM gabcas28/ubuntu-node-mocha

RUN useradd -ms /bin/bash tester

WORKDIR /app

COPY *.json ./ 

RUN npm install .

USER tester

CMD npm test