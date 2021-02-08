FROM gabcas28/ubuntu-node-mocha

RUN useradd -ms /bin/bash tester

WORKDIR /app

COPY *.json gulpfile.js ./ 

RUN npm install -g gulp \
    && npm install .

CMD npm test