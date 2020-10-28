[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

# Image Repository

_The main objective of the project is to allow the user to store, share and review images._

## Architecture :european_castle:

Since uploading and sometimes serving pictures may take a long time, an **event driven architecture** is chosen for the project.

This way, we avoid freezing server threads, unloading its charge. We also achieve a faster response and a smoother user experience.

Aa a initial approach of the architecture, the gateway will receive the requests and them to the processor. The processor will create an event queue and generate dedicated processes. These processes will update the database and a thin layer that is an aggreate of information ready to read by the user.

This way, whenever the user makes a request, he will wait for no response as it is already prepared in the thin data layer. 

The tools to use are unclear yet, probably will be MongoDB for the databases, RabbitMQ as a message broker and Celery as a distributed job queue.

## User Stories :eyes:

Some different User Stories can be defined for this project using the following structure:

_As **role** I want **a feature** in order to **intention/s**._

The following ones try to cover all the main features to implement:

* [As a **photographer** I want to **upload pictures** so **other users can see and comment them**.](https://github.com/GabCas28/Image-Repository/issues/6)

* [As an **artist** I want to **view photos** in order to **inspire myself**.](https://github.com/GabCas28/Image-Repository/issues/7)

* [As an **expert** I want to **qualify pictures** in order to **enhance constructive comments**.](https://github.com/GabCas28/Image-Repository/issues/8)

* [As a **compeer** I want to **comment pictures** in order to **support and motivate other photographers**.](https://github.com/GabCas28/Image-Repository/issues/9)

* [As a **busy user** I want to have **fast responses** in order to **optimize my schedule**](https://github.com/GabCas28/Image-Repository/issues/10)

## Project Planning in Milestones and Issues :golf:

As a planning for the project a few milestones are set, along with several issues covering the previously mentioned User Stories. 
All the open issues are grouped inside the [project roadmap](https://github.com/GabCas28/Image-Repository/projects/1).

1. [Project Planning](https://github.com/GabCas28/Image-Repository/milestone/2) (For this week)
    * [Write down user stories](https://github.com/GabCas28/Image-Repository/issues/4)
    * [Select Project Architecture](https://github.com/GabCas28/Image-Repository/issues/5)

2. [Set-Up Event Architecture](https://github.com/GabCas28/Image-Repository/milestone/3)
    * [Construct an Event Based Architecture](https://github.com/GabCas28/Image-Repository/issues/10)
  
3. [Picture management features](https://github.com/GabCas28/Image-Repository/milestone/4)
    * [Allow users to upload pictures](https://github.com/GabCas28/Image-Repository/issues/6)

    * [Allow users to display pictures](https://github.com/GabCas28/Image-Repository/issues/7)

4. [Implement Comment System](https://github.com/GabCas28/Image-Repository/milestone/5)
    * [Allow comments of pictures](https://github.com/GabCas28/Image-Repository/issues/9)

5. [Develop Picture Qualification](https://github.com/GabCas28/Image-Repository/milestone/6)
    * [Implement Qualification system](https://github.com/GabCas28/Image-Repository/issues/8)

## Linked entity classes :link:

The initial classes represent the basic structure of the objects that will be stored into the database, with the elemental CRUD (Create, Read, Update, Dete) operations.
They are the following:

- [Picture](./src/Picture.ts)
- [Rating](./src/Rating.ts)
- [Review](./src/Review.ts)

## Motivation 📖

Usually photographers make pictures and want to share them with a remote audience. They may want to receive feedback about them as well.  

In fact, this is a common problem since any type of image a user can upload into any app, usually needs to be stored and retrieved many times. Therefore, a lot of applications and services make use of image management and similar resources. This is the reason to develop this small yet potentially useful project.

Without entering in authorization issues, this project intention is to create a scalable module that can be introduced into other projects, managing the pictures and allowing to add comments and reviews from other users.

## Set Up 🚀

For initial configuration og Github and SSH key pairing, take a look at the [initial configuration file](/doc/Initial%20Set-Up.md).

## License 📄

This project is under the [GPL-3.0 License](LICENSE.md).
