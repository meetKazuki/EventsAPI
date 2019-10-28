# Events API

[![Build Status](https://travis-ci.org/meetKazuki/EventsAPI.svg?branch=develop)](https://travis-ci.org/meetKazuki/EventsAPI)
[![Coverage Status](https://coveralls.io/repos/github/meetKazuki/EventsAPI/badge.svg?branch=develop)](https://coveralls.io/github/meetKazuki/EventsAPI?branch=develop)

## Overview:

This project provides an API that you can be used to create and manage your events. 

## Project Pipeline:

- [Hosted API](https://eventsapi-staging.herokuapp.com/)
- [API Docs](https://eventsapi-staging.herokuapp.com/docs)
- [Postman Collections](https://www.getpostman.com/collections/436773e9e1be1d83c314)


## Technologies Used
* NodeJS
* ExpressJS


## Getting Started:

### Prerequisites

Ensure that you have the following installed on your local machine:

- [NodeJS](https://nodejs.org/en/download)
- [Git](https://git-scm.com/downloads)

### Running locally

  ```bash
    - git clone https://github.com/meetKazuki/EventsAPI.git
    - cd EventsAPI
    - npm install
    - npm run start:dev 
  ```
- `npm run start:dev` - to spin up the server and watch for changes.

### Testing

Test specs are implemented using [_mocha_](https://mochajs.org) & [_chai_](https://chiajs.com).

- To test or consume the API locally, you can make use of [_Postman_](https://www.getpostman.com) to simulate a front-end client.

- If you want to take the step below, first create a PostgreSQL database by running the command below in `psql`.

  ```bash
   createdb -h localhost -p 5432 -U postgres quicktest
  ```

- There is also a test script that you can fire up by running `npm test`. `npm test` performs a single full test suite run, including code coverage reporting.


## License:

The EventsAPI project is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).
