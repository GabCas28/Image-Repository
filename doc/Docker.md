# Docker Hub

To understand more about Docker Hub repositories, these instructions might be useful [[1]](#references). The repositories hold different images generated for our projects. In this case, the main goal is to create an image for testing purposes.

By linking the repository to a Github repository, we ask Docker Hub to collect these images and save them. This way we can access them and all the different versions we created.

To create Docker images, we use Dockerfiles. These files contain instructions for building and setting the container up. For example, selecting the OS to use, which is the first command to add. Apart from an OS, the test container should have Node installed. It also should have all the program dependencies.

Yet, the size of the container should be the smallest possible. This way it is easier to download, build and run. It will use less of the computer resources when running and will be more shareable across environments. For these reasons, in this exercise we will generate and compare different containers.

The final goal is to make an image for testing. We also want to assure that the tests are running in the same environment as our application [[2]](#references). That’s why we create one image based on the application’s container. Instead of creating a completely different image for testing.

## Docker Hub connection

First, link the GitHub profile with your Docker Hub account. These instructions follow all necessary steps for it’s connection [[3]](#references)

## New repository with automated build

Then you can create a new repository, and link its automated builds to our Github repository. After we make a push into our project, DockerHub will create and save the container images from it.

## Try different containers

First we need an image that holds all the application files in it. It also runs all the necessary commands for it to work.

Then, another image is set using the first one as a base. It will copy the tests files and install the required libraries to run them. Also sets the commands for it to run.

The generated Dockerfile for the application is the following: [Dockerfile](../Dockerfile). 

I tried node image first, and it turned out to be a bit heavy for this project. Then I switched to node-alpine. It includes node and npm and it's built on Alpine linux.

As they define it in their website:

>Alpine Linux is a security-oriented, lightweight Linux distribution based on musl libc and busybox.

This distribution is specially useful for the Docker containers since makes them way smaller (around 5MB).

## References

[1] Docker. (2020). Repositories. https://docs.docker.com/docker-hub/repos/

[2] Una-Tsameret, N. (2016). Testing a Node.JS Application Within a Docker Container. https://dzone.com/articles/testing-nodejs-application-using-mocha-and-docker

[3] Docker. (2020). Configure automated builds from GitHub and BitBucket. https://docs.docker.com/docker-hub/builds/link-source/