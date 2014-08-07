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

A more detailed set of current tasks can be found here: [task list](https://github.com/DrkSephy/git-technetium/blob/master/notes/tasks.txt)

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

Existing Routes
---------------

After getting the project running, the following client-side routes are currently available for use: 
    
    // Returns all issue titles for a given repository.
    127.0.0.1:8080/#/issues

    // Returns a listing of the number of commits for each contributor for a given repository.
    127.0.0.1:8080/#/commits

    // Returns a listing of all issues opened for each contributor in a repository.
    127.0.0.1:8080/#/issues_opened

    // Returns a listing of all issues assigned to each contributor in a given repository.
    127.0.0.1:8080/#/issues_assigned

    // Returns the total number of comments on issues by each contributor in a given repository.
    127.0.0.1:8080/#/issuesComments

    // Returns a listing of the lines of code added/deleted by each contributor in a given repository.
    127.0.0.1:8080/#/loc

    // Returns the total number of comments on commits for each contributor in a given repository.
    127.0.0.1:8080/#/commitComments

    // Returns the total number of pull requests by each contributor in a given repository.
    127.0.0.1:8080/#/pulls


Useful Libraries / Links
------------------------

* [pdfmake](http://pdfmake.org/#/) - A client/server-side PDF printing library.
* [QUnit](http://qunitjs.com/) - A powerful JavaScript unit-testing framework.
* [UnitJS](http://unitjs.com/) - Another powerful JavaScript unit-testing framework. 
* [mocha](http://visionmedia.github.io/mocha/) - A JavaScript testing framework with powerful testing features. 
* [D3](http://d3js.org/) - A JavaScript library for using documents as data. Useful for a wide array of graphs.
* [PhantomJS](http://phantomjs.org/) - A headless WebKit with a JavaScript API, useful for testing with frameworks such as Mocha.
* [Git API](https://developer.github.com/v3/) - Github API.
* [Bitbucket API Console](http://restbrowser.bitbucket.org/) - A web console with interacting with the Bitbucket API.


