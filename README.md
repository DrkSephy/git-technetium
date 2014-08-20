git-technetium
==============

Repository for a github powered application built using the MEAN stack. The following features are planned:

    [X] Create modules for viewing statistics on a repository 
    [ ] Build meaningful graphs using D3 
    [ ] Ability to export reports to PDF
    [ ] Unit testing using Mocha/PhantomJS where applicable
    [ ] Centralized Issue Tracker
    [ ] Repository Subscription Manager
    [ ] Integrate application with Bitbucket API

A more detailed set of current tasks can be found here: [task list](https://github.com/DrkSephy/git-technetium/blob/master/notes/tasks.txt)


Dependencies
------------

After cloning this repository, the first step is to install all dependencies. 

    git-technetium$ npm install
    git-technetium$ bower install

NOTE: If you are on a Mac, you will need to run `sudo npm install`. 

Getting Started
---------------

Inside of your Github account settings, please register this application in order to obtain a 
`client_id` and `client_secret`. This will allow you to make up to 5000 requests per hour, and
allows for quicker testing. Once you have obtained these keys, modify `server.js` as shown below:

    var CLIENT_ID = 'YOUR_CLIENT_ID';
    var CLIENT_SECRET = 'YOUR_CLIENT_SECRET';


Existing Routes
---------------

After getting the project running, the following client-side routes are currently available for use: 
    
    // Displays a listing of all statistics in a given repository
    127.0.0.1:9000/#/reports

    // Returns all issue titles for a given repository.
    127.0.0.1:9000/#/issues

    // Returns a listing of the number of commits for each contributor for a given repository.
    127.0.0.1:9000/#/commits

    // Returns a listing of all issues opened for each contributor in a repository.
    127.0.0.1:9000/#/issues_opened

    // Returns a listing of the number of issues assigned to each contributor in a given repository.
    127.0.0.1:9000/#/issues_assigned

    // Returns a listing of the number of  issues closed by each contributor in a given repository.
    127.0.0.1:9000/#/issues_closed

    // Returns a listing of total pull request comments by each contributor in a given repository.
    http://127.0.0.1:9000/#/pullRequestComments

    // Returns the total number of comments on issues by each contributor in a given repository.
    127.0.0.1:9000/#/issuesComments

    // Returns a listing of the lines of code added/deleted by each contributor in a given repository.
    127.0.0.1:9000/#/loc

    // Returns the total number of comments on commits for each contributor in a given repository.
    127.0.0.1:9000/#/commitComments

    // Returns the total number of pull requests by each contributor in a given repository.
    127.0.0.1:9000/#/pulls


Useful Libraries / Links
------------------------

* [async.js](https://github.com/caolan/async) - A library with powerful functions for dealing with asynchronous code.
* [pdfmake](http://pdfmake.org/#/) - A client/server-side PDF printing library.
* [QUnit](http://qunitjs.com/) - A powerful JavaScript unit-testing framework.
* [UnitJS](http://unitjs.com/) - Another powerful JavaScript unit-testing framework. 
* [mocha](http://visionmedia.github.io/mocha/) - A JavaScript testing framework with powerful testing features. 
* [D3](http://d3js.org/) - A JavaScript library for using documents as data. Useful for a wide array of graphs.
* [PhantomJS](http://phantomjs.org/) - A headless WebKit with a JavaScript API, useful for testing with frameworks such as Mocha.
* [Git API](https://developer.github.com/v3/) - Github API.
* [Bitbucket API Console](http://restbrowser.bitbucket.org/) - A web console for interacting with the Bitbucket API.


