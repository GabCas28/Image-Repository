# Microservices

In this document, we look into microservices. We discuss their design, creation and proper configuration.

## Framework Selection

There are many Frameworks for API and Services in Javascript, as read in [[1]] and [[2]].

This repository aims to be reused as a module. And so, some modifications may be introduced to adapt to different projects and environments.

This is why, even though it has competent alternatives, the framework selected is Express. Mainly because of its popularity among other advantages.

Express is a well established, open-source package and many developers already know it. And if they don't, it is still easy to understand. It also has the support of a huge community which provides a variety of well-documented tutorials.

## Architecture Design

The structure of User Stories is already divided into three Microservices, which correspond to the three milestones set for the project:

1. Images
2. Comments
3. Ratings

The structure of each one of them consists of:

- Two GET routes, the first to show a list of all or at least some of the items in the database; and the second, to retrieve a single element corresponding to a given Id.
- PATCH route, to edit a single element with the given Id.
- DELETE route, to remove a single element with the given Id.
- POST route, to create an element with the given information in the body of the request.

[//]: # (TODO: Relate with more detail to User Stories)

## Distributed Configuration and Logs

For the distributed configuration, again for its popularity, [`etcd`](https://etcd.io/) is chosen. It provides consistency, availability, speed and security when delivering configuration variables across the microservices.

After reading about different logging practices and libraries in [[3]] among other sources. [Winston](https://github.com/winstonjs/winston) is the selected library to use with Express since it is robust and configurable.

The logging configuration is held inside the [winston.ts](https://github.com/GabCas28/Image-Repository/blob/main/src/common/log/winston.ts) file, that exports a `logger` and a `logger.stream` to be used with [Morgan](https://github.com/expressjs/morgan).

## References

[[1]] Ali, A. (2021). 12 Popular JavaScript Frameworks to Build API and Microservices. GeekFlare. https://geekflare.com/javascript-frameworks-for-api/

[[2]] What are the best Express.js alternatives? (2021). Slant. https://www.slant.co/topics/4307/~express-js-alternatives

[[3]] KUNDEL, D. (2019). A Guide to Node.js Logging. https://www.twilio.com/blog/guide-node-js-logging

[1]:https://geekflare.com/javascript-frameworks-for-api/
[2]:https://www.slant.co/topics/4307/~express-js-alternatives
[3]:https://www.twilio.com/blog/guide-node-js-logging