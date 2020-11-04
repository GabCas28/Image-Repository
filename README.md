[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

# Image Repository

_The **main** objective of the project is to allow the user to store, share and review images._

## Architecture :european_castle:

Since uploading and sometimes serving pictures may take a long time, an **event driven architecture** is chosen for the project.

This way, we avoid freezing server threads, unloading its charge. We also achieve a faster response and a smoother user experience.

The tools and frameworks to use are MongoDB for the databases, RabbitMQ as a message broker and Celery as a distributed job queue. The structure of the services will be written in Node, and the messages will be sent to the Celery system, so the system will use a combination of different languages: Python for the events; Javascript for the logic; and Typescript for the database object interfaces.

## User Stories :eyes:

Some different User Stories can be defined for this project using the following structure:

_As **role** I want **a feature** in order to **intention/s**._

The following ones try to cover all the main features to implement:

* [As a **photographer** I want to **upload pictures** so **other users can see and comment them**.](https://github.com/GabCas28/Image-Repository/issues/6)

* [As an **artist** I want to **view photos** in order to **inspire myself**.](https://github.com/GabCas28/Image-Repository/issues/7)

* [As an **expert** I want to **qualify pictures** in order to **enhance constructive comments**.](https://github.com/GabCas28/Image-Repository/issues/8)

* [As a **compeer** I want to **comment pictures** in order to **support and motivate other photographers**.](https://github.com/GabCas28/Image-Repository/issues/9)

* [As a **busy user** I want to have **fast responses** in order to **optimize my schedule**](https://github.com/GabCas28/Image-Repository/issues/10)

## Project Planning :golf:

All the open issues are grouped inside the **[project canvas](https://github.com/GabCas28/Image-Repository/projects/1)**.
As for the milestones, these are the initial four:

0. [Set-Up Event Architecture](https://github.com/GabCas28/Image-Repository/milestone/3)

1. [Picture management features](https://github.com/GabCas28/Image-Repository/milestone/4)

2. [Implement Comment System](https://github.com/GabCas28/Image-Repository/milestone/5)

3. [Develop Picture Qualification](https://github.com/GabCas28/Image-Repository/milestone/6)

The following diagram shows the initial planning for the project:

![Gantt Diagram](./doc/img/IR-Gantt1.png)

The first thing to do, as the numbered list suggests, is to allow the user to upload pictures. Since starting the environment and everything needed for this purpose takes a bit longer, it will take at least two weeks and a half to get it implemented. This time includes: setting up a database, researching and installing the tools needed, and getting the system running. Setting up everything is essential to start uploading the first pictures, that's why Milestone "Set-Up Event Architecture" is included in this time chunk and it should be completed along with the Milestone 1, "Picture management features".

After that, retrieving a list of pictures should be easy, and for that only one week and a half will be necessary.

Once the picture system is up and running, creating a new service for comments will be due. Since it's not clear if they will make use of the event system, a deadline of two and a half weeks is set.

The same goes for the rating system, however, as it will be similar to the comments, only two weeks are needed to add this functionality.

If there is enough time, new features might be added once the basic structure is done, such as: password-secured pictures, thumbnail generation, blur image pre-load, etc..

## Linked entity classes :link:

These classes represent the basic structure of the objects that will be stored into the database.

The initial database interfaces are the following:

* [Picture](./src/Picture.ts)
* [Rating](./src/Rating.ts)
* [Review](./src/Review.ts)

## Motivation 📖

[Link to the motivations of the project](/doc/Motivation.md).

## Set Up 🚀

[Unitial configuration file](/doc/Initial%20Set-Up.md).

## License 📄

This project is under the [GPL-3.0 License](LICENSE.md).
