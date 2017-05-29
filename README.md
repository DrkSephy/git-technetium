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

A more detailed set of current tasks can be found here: [task list](https://github.com/DrkSephy/git-technetium/blob/master/notes/tasks.txt).


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
allows for quicker testing. For help on registering an application, see [this link](http://docs.codenvy.com/register-a-github-application/) Once you have obtained these keys, modify `config.js` as shown below:

    var CLIENT_ID = 'YOUR_CLIENT_ID';
    var CLIENT_SECRET = 'YOUR_CLIENT_SECRET';

Useful Libraries / Links
------------------------

* [istanbul](https://github.com/gotwarlost/istanbul) - JS code coverage tool. 
* [karma-runner](https://github.com/karma-runner/karma) - Powerful test runner supporting several testing frameworks.
* [async.js](https://github.com/caolan/async) - A library with powerful functions for dealing with asynchronous code.
* [pdfmake](http://pdfmake.org/#/) - A client/server-side PDF printing library.
* [QUnit](http://qunitjs.com/) - A powerful JavaScript unit-testing framework.
* [UnitJS](http://unitjs.com/) - Another powerful JavaScript unit-testing framework. 
* [mocha](http://mochajs.org/) - A JavaScript testing framework with powerful testing features. 
* [D3](http://d3js.org/) - A JavaScript library for using documents as data. Useful for a wide array of graphs.
* [PhantomJS](http://phantomjs.org/) - A headless WebKit with a JavaScript API, useful for testing with frameworks such as Mocha.
* [Git API](https://developer.github.com/v3/) - Github API.
* [Bitbucket API Console](http://restbrowser.bitbucket.org/) - A web console for interacting with the Bitbucket API.


