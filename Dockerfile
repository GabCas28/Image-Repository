FROM gabcas28/ubuntu-node-mocha

RUN useradd -ms /bin/bash tester

WORKDIR /app

# .gitignore filters unnecessary files. (LICENSE, package.json, assets and src) 
COPY ./ ./ 

RUN chown -R tester:tester /app \
    && chmod 755 /app \
    && npm install .

USER tester

CMD npm test