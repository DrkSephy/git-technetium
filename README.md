git-technetium
==============

Repository for a github powered application built using the MEAN stack. The following features are planned:

    [ ] Create modules for viewing statistics on a repository 
    [ ] Build meaningful graphs using D3 
    [ ] Ability to export reports to PDF
    [ ] Unit testing using Mocha/PhantomJS where applicable
    [ ] Centralized Issue Tracker
    [ ] Repository Subscription Manager
    [ ] Integrate application with Bitbucket API


Getting Started
---------------

After cloning this repository, the first step is to install all dependencies. 

    git-technetium$ npm install
    git-technetium$ bower install

NOTE: If you are on a Mac, you will need to run `sudo npm install`. 

There is currently one test endpoint for the server, which pulls data from the NHL API. If you navigate to:
`127.0.0.1:8080/api/helloworld`, you will see the json response in your browser.

There is also a test endpoint for the client. If you go to `127.0.0.1:8080/#/hello`, you will see a basic
`Hello World` response. 

You are now ready to start creating your own routes and begin any of the tasks listed within `notes/tasks.txt`.

