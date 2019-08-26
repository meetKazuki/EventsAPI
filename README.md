# Events API

[![Build Status](https://travis-ci.org/meetKazuki/EventsAPI.svg?branch=develop)](https://travis-ci.org/meetKazuki/EventsAPI)
[![Coverage Status](https://coveralls.io/repos/github/meetKazuki/EventsAPI/badge.svg?branch=develop)](https://coveralls.io/github/meetKazuki/EventsAPI?branch=develop)

## Overview

This little project provides an API that you can use to create and manage your Events.

## Project Pipeline

- [Hosted API](https://eventsapi-staging.herokuapp.com/)
- [API Docs](/docs)


## Technologies Used
* NodeJS
* ExpressJS


## Getting Started

### Prerequisites

Ensure that you have the following installed on your local machine:

- [NodeJS](https://nodejs.org/en/download)
- [Git]()

### Running locally

- Make sure you have *NodeJS*, *Git* installed.
- Clone this repository

  ```bash
    - git clone https://github.com/meetKazuki/EventsAPI.git
    - cd EventsAPI
    - npm install
  ```
- Run `npm run start:dev` to spin up the server and watch for changes.

### Testing

Test specs are implemented using [mocha](https://mochajs.org) & [chai](https://chaijs.com).

- To test (consume) the API locally, you can make use of [Postman](https://getpostman.com).
- You can also run an automated test by running `npm test`. `npm test` performs a single full test suite run, including code coverage reporting.


## License

The EventsAPI project is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).
