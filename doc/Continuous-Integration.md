# Continuous Integration

**Building the project** and **testing the code** every time we make changes can be overwhelming, especially when working in a team. For this reason, automatic building and code testing is usually integrated in an automatic workflow. This process is called Continuous Integration (CI), and it can include **deploying code** as well. However, getting CI done is complicated, so several tools are launched in the market to help getting it right.

Some of the Continuous integration tools in the market are: Jenkins, TravisCI, TeamCity, Buddy, GitLabCI, CircleCi, Bamboo, GitHub Actions.

Now, let us see some examples of how these tools are installed and used.

## TravisCI

The use of Travis is simple. Just make an account in https://docs.travis-ci.com/ then add the `.travis.yml` config file to your repository. [[1]]
Travis is well integrated with GitHub and with every commit will run the workflow explicit in your `.travis.yml`  file.

    language: node_js
    node_js:
    - "10"
    - "node"
    cache: npm
    install:
    - npm ci
    script: npm test

The workflow will run using the minimum version of npm supported, which is the version 10 (found out after try and error of several version) and it is also tested with the latest stable build. 

Using the `cache: npm` we allow Travis to cache all the node_modules speeding the workflow.

To get the badge into your README file, click on the badge in the TravisCI's repository page. There you can copy a markdown link as it follows:

[![Build Status](https://travis-ci.com/GabCas28/Image-Repository.svg?branch=main)](https://travis-ci.com/GabCas28/Image-Repository)


## GitHub Actions

## Jenkins

## References

[[1]] Travis CI. (2020). Travis CI tutorial. https://docs.travis-ci.com/user/tutorial/

[[2]] Travis CI. (2020). Caching Dependencies and Directories. https://docs.travis-ci.com/user/caching/

[[3]] Travis CI. (2020). GitHub Pages Deployment. https://docs.travis-ci.com/user/deployment/pages/

[1]:https://docs.travis-ci.com/user/tutorial/
[2]:https://docs.travis-ci.com/user/caching/
[3]:https://docs.travis-ci.com/user/deployment/pages/
