# EPICmail [![Build Status](https://travis-ci.com/Emile-Nsengimana/EPICmail.svg?branch=develop)](https://travis-ci.com/Emile-Nsengimana/EPICmail) [![Coverage Status](https://coveralls.io/repos/github/Emile-Nsengimana/EPICmail/badge.svg?branch=challenge-ii)](https://coveralls.io/github/Emile-Nsengimana/EPICmail?branch=challenge-ii)

# UI was developed using
* html
* css
* javascript
# UI template(gh-pages)
https://emile-nsengimana.github.io/EPICmail/UI

# API endpoind was developed using
* Nodejs v10.15.1
* Express (server)
* Mocha and chai for unit test
* ESlint (Airbnb)
* Travis CI (continous integration)

# API ENDPOINTS
| API | Methods  | Description  |
| ------- | --- | --- |
| /api/v1/messages | GET | display all messages |
| /api/v1/messages/unread | GET | display unread messages |
| /api/v1/messages/read | GET | display read messages |
| /api/v1/messages/:id | DELETE | remove a specific message |
| /api/v1/messages/sent/:senderId | GET | remove a specific message |
| /api/v1/messages | POST | add a message |
| /api/v1/contacts | GET | display all contacts |
| /api/v1/contacts/:email | GET | display a specific contact |
| /api/v1/contacts/:email | DELETE | remove a specific contacts |
| /api/v1/contacts | POST | add a new contact |
| /api/v1/users | GET | display all users |
| /api/v1/users/:email | GET | display a specific user |
| /api/v1/users/:email | DELETE | display all users |

# HOW CAN IT BE MANUAL TESTED
After cloning/downloading this repo
* You need:
- Nodejs installed in you machine with npm
- An editor
* Then:
- Open the folder in your favorite editor
- Open the terminal of your editor
- Initialize npm(npm init)
- Install all required packages (npm install)
- For unit test run (npm test)
- To run the app (npm start)
- Install 'POSTMAN' to test out the API endpoints
