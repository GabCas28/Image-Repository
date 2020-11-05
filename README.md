[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

# Image Repository

## User Stories :eyes:

Some different User Stories can be defined for this project using the following structure:

_As **role** I need to **a feature** in order to **intention/s**._

The following ones cover all the main features to implement:

* [As a **photographer** I need to to **upload pictures along with their title and description** so **other users can see and comment them**.](https://github.com/GabCas28/Image-Repository/issues/17)

* [As a **user** I need to **view pictures** in order to **inspire myself**.](https://github.com/GabCas28/Image-Repository/issues/18)

* [As a **photographer** I want to **delete my pictures** that I **no longer want to share**.](https://github.com/GabCas28/Image-Repository/issues/19)

* [As a **photographer** I need to **update my pictures** so I can change **their description, title, or even the picture itself**.](https://github.com/GabCas28/Image-Repository/issues/20)

* [As a **rater** I need to **qualify pictures** in order to **support their authors**.](https://github.com/GabCas28/Image-Repository/issues/21)

* [As a **user** I need to **view ratings of pictures** in order to **understand what people like**.](https://github.com/GabCas28/Image-Repository/issues22)

* [As a **rater** I need to **modify my ratings** in order to **change my mind**.](https://github.com/GabCas28/Image-Repository/issues/23)

* [As a **rater** I need to **delete my ratings** that **are no longer adequate**.](https://github.com/GabCas28/Image-Repository/issues/24)

* [As a **commenter** I need to **comment pictures** in order to **share constructive ideas**.](https://github.com/GabCas28/Image-Repository/issues/25)

* [As a **user** I need to **view piture comments** in order to **see useful feedback**.](https://github.com/GabCas28/Image-Repository/issues/26)

* [As a **user** I need to **vote comments** in order to **give feedback**.](https://github.com/GabCas28/Image-Repository/issues/27)

* [As a **commenter** I need to **modify my comments** so I can **fix mistakes or add new ideas**.](https://github.com/GabCas28/Image-Repository/issues/28)

* [As a **commenter** I need to **delete my comments** that **are no longer adequate**.](https://github.com/GabCas28/Image-Repository/issues/29)

* [As an **administrator** I need to **delete pictures** to **prevent unsuitable uses***](https://github.com/GabCas28/Image-Repository/issues/30)

* [As an **administrator** I need to **delete comments** to **prevent unsuitable uses***](https://github.com/GabCas28/Image-Repository/issues/31)

* [As an **administrator** I need to **delete ratings** to **prevent unsuitable uses***](https://github.com/GabCas28/Image-Repository/issues/32)

* [As a **user** I need to **modify my vote to a comment** in order to **give feedback**.](https://github.com/GabCas28/Image-Repository/issues/33)

*Unsuitable uses means pornography, violence, spam or anything that violates the integrity of the system or their users.

## Project Planning :crystal_ball:

* During the whole project the achitecture chosed will be taken in mind.

* The first thing to do is to allow the photographer to upload pictures.

* After that, every user should be able to retrieve this picture.

* The following step is allowing the photographer to delete the picture or modify it.

* The admin of the system should be able to delete the picture as well. 

* Once the picture system is up and running, creating a new service for comments will be due. This means allowing the commenters to add commetns to the pictures.

* When the comments can be added, the next step should be allowing every user to read the comments.

* Once that is done, the comments should be modifieable or deleted by the user who wrote it, or deleted by the administrator of the system.

* The next step will be implementing the rating system. So first, ratings should be allowed for each picture.

* Once the rating is up, every user should be able to see them.

* Once ratings is public, the user that made it can cahnge it or delete it, and the admin can delete them as well.

* If there is enough time, new features might be added once the basic structure is done, such as: password-secured pictures, thumbnail generation, blur image pre-load, etc..

## Linked entity classes :link:

The initial classes are the following:

* [Picture](./src/Picture.ts)
  * Id: String
  * Source: String
  * Author: User
  * Title: String
  * Description: String
  * Comments : Comment List
  * Ratings : Rating List
  
* [Rating](./src/Rating.ts)
  * Id: String
  * Author: User
  * Value: Integer
  
* [Commment](./src/Comment.ts)
  * Id: String
  * Author: User
  * Title: String
  * Body: String
  * Votes: Integer
 
* [User](./src/User.ts)
  * Id: String
  * Name: String
  * Email: String
  * Password: String
 
* [Controller](./src/Controller.ts)
  * - RetrievePictures: Displays all the pictures in the system

  
## Milestones and Issues :snowflake:

All the open issues are grouped inside the [project roadmap](https://github.com/GabCas28/Image-Repository/projects/1).
  
* [Picture management features](https://github.com/GabCas28/Image-Repository/milestone/4)

  * [As a **photographer** I need to to **upload pictures along with their title and description** so **other users can see and comment them**.](https://github.com/GabCas28/Image-Repository/issues/17)

  * [As a **user** I need to **view pictures** in order to **inspire myself**.](https://github.com/GabCas28/Image-Repository/issues/18)

  * [As a **photographer** I want to **delete my pictures** that I **no longer want to share**.](https://github.com/GabCas28/Image-Repository/issues/19)

  * [As a **photographer** I need to **update my pictures** so I can change **their description, title, or even the picture itself**.](https://github.com/GabCas28/Image-Repository/issues/20)
  
  * [As an **administrator** I need to **delete pictures** to **prevent unsuitable uses***](https://github.com/GabCas28/Image-Repository/issues/30)

* [Comment System](https://github.com/GabCas28/Image-Repository/milestone/5)

  * [As a **commenter** I need to **comment pictures** in order to **share constructive ideas**.](https://github.com/GabCas28/Image-Repository/issues/25)

  * [As a **user** I need to **view piture comments** in order to **see useful feedback**.](https://github.com/GabCas28/Image-Repository/issues/26)

  * [As a **user** I need to **vote comments** in order to **give feedback**.](https://github.com/GabCas28/Image-Repository/issues/27)
  
  * [As a **user** I need to **modify my vote to a comment** in order to **give feedback**.](https://github.com/GabCas28/Image-Repository/issues/33)

  * [As a **commenter** I need to **modify my comments** so I can **fix mistakes or add new ideas**.](https://github.com/GabCas28/Image-Repository/issues/28)

  * [As a **commenter** I need to **delete my comments** that **are no longer adequate**.](https://github.com/GabCas28/Image-Repository/issues/29)
  
  * [As an **administrator** I need to **delete comments** to **prevent unsuitable uses***](https://github.com/GabCas28/Image-Repository/issues/31)

* [Rating System](https://github.com/GabCas28/Image-Repository/milestone/6)

  * [As a **rater** I need to **qualify pictures** in order to **support their authors**.](https://github.com/GabCas28/Image-Repository/issues/21)

  * [As a **user** I need to **view ratings of pictures** in order to **understand what people like**.](https://github.com/GabCas28/Image-Repository/issues22)

  * [As a **rater** I need to **modify my ratings** in order to **change my mind**.](https://github.com/GabCas28/Image-Repository/issues/23)

  * [As a **rater** I need to **delete my ratings** that **are no longer adequate**.](https://github.com/GabCas28/Image-Repository/issues/24)
  
  * [As an **administrator** I need to **delete ratings** to **prevent unsuitable uses***](https://github.com/GabCas28/Image-Repository/issues/32)


## Architecture :european_castle:

Since uploading and sometimes serving pictures may take a long time, an **event driven architecture** is chosen for the project.
This way, we avoid freezing server threads, unloading its charge. We also achieve a faster response and a smoother user experience.


## Motivation 📖

[Link to the motivations of the project](/doc/Motivation.md).

## Set Up 🚀

[Unitial configuration file](/doc/Initial%20Set-Up.md).

## License 📄

This project is under the [GPL-3.0 License](LICENSE.md).
