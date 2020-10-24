[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

# Image Repository

_The main objective of the project is to allow the user to store, share and review images._

## Architecture :european_castle:

Since uploading and sometimes serving pictures may take a long time, an **event driven architecture** is chosen for the project.

This way, we avoid freezing server threads, unloading its charge. We also achieve a faster response and a smoother user experience.

## User Stories :eyes:

Some different User Stories can be defined for this project using the following structure:

_As **role** I want **a feature** in order to **intention/s**._

The following ones try to cover all the main features to implement:

* [As a **photographer** I want to **upload pictures** so **other users can see and comment them**.](https://github.com/GabCas28/Image-Repository/issues/6)

* [As an **artist** I want to **view photos** in order to **inspire myself**.](https://github.com/GabCas28/Image-Repository/issues/7)

* [As an **expert** I want to **qualify pictures** in order to **enhance constructive comments**.](https://github.com/GabCas28/Image-Repository/issues/8)

* [As a **compeer** I want to **comment pictures** in order to **support and motivate other photographers**.](https://github.com/GabCas28/Image-Repository/issues/9)

* [As a **busy user** I want to have **fast responses** in order to **optimize my schedule**](https://github.com/GabCas28/Image-Repository/issues/10)

## Milestones and Issues :golf:

As a planning for the project, a few milestones are set, covering the previously mentioned features.

* [Project Planning](https://github.com/GabCas28/Image-Repository/milestone/2) (For this week)
  * [Write down user stories](https://github.com/GabCas28/Image-Repository/issues/4)
  * [Select Project Architecture](https://github.com/GabCas28/Image-Repository/issues/5)

* [Set-Up Event Architecture](https://github.com/GabCas28/Image-Repository/milestone/3)
  * [Construct an Event Based Architecture](https://github.com/GabCas28/Image-Repository/issues/10)
* [Picture management features](https://github.com/GabCas28/Image-Repository/milestone/4)
  * [Allow users to upload pictures](https://github.com/GabCas28/Image-Repository/issues/6)

  * [Allow users to display pictures](https://github.com/GabCas28/Image-Repository/issues/7)

* [Implement Comment System](https://github.com/GabCas28/Image-Repository/milestone/5)
  * [Allow comments of pictures](https://github.com/GabCas28/Image-Repository/issues/9)

* [Develop Picture Qualification](https://github.com/GabCas28/Image-Repository/milestone/6)
  * [Implement Qualification system](https://github.com/GabCas28/Image-Repository/issues/8)

All the open issues are grouped inside this [project roadmap](https://.github.com/GabCas28/Image-Repository/projects/1)

## Motivation 📖

Usually photographers make pictures and want to share them with a remote audience. They may want to receive feedback about them as well.  

In fact, this is a common problem since any type of image a user can upload into any app, usually needs to be stored and retrieved many times. Therefore, a lot of applications and services make use of image management and similar resources. This is the reason to develop this small yet potentially useful project.

Without entering in authorization issues, this project intention is to create a scalable module that can be introduced into other projects, managing the pictures and allowing to add comments and reviews from other users.

## Set Up 🚀

For initial configuration og Github and SSH key pairing, take a look at the [initial configuration file](/doc/Initial%20Set-Up.md).

## License 📄

This project is under the [GPL-3.0 License](LICENSE.md).
