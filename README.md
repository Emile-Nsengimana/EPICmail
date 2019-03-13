[![Build Status](https://travis-ci.com/Emile-Nsengimana/EPICmail.svg?branch=develop)](https://travis-ci.com/Emile-Nsengimana/EPICmail) [![Coverage Status](https://coveralls.io/repos/github/Emile-Nsengimana/EPICmail/badge.svg?branch=challenge-ii)](https://coveralls.io/github/Emile-Nsengimana/EPICmail?branch=challenge-ii)
# EPICmail
Is a web app that helps people exchange messages/information over the internet.

### User interface (UI)
* html
* css
* javascript
### UI template(gh-pages)
https://emile-nsengimana.github.io/EPICmail/UI

### Heroku
https://andela-epicmail.herokuapp.com/

### Requirements

- `Nodejs` - a JavaScript run-time environment that executes JavaScript code outside of a browser
- `NPM` - a package manager for the JavaScript programming language
- `Git` - version-control system for tracking changes in source code during software development

### SETUP
First clone it to your machine:
```
git clone https://github.com/Emile-Nsengimana/EPICmail.git
cd EPICmail
```
Install all necessary node modules
```
npm install
```
Start the app
```
npm start
```
Run tests
```
npm test
```

### API ENDPOINTS
| API | Methods  | Description  |
| ------- | --- | --- |
| /api/v1/messages | GET | display all messages |
| /api/v1/messages/unread | GET | display unread messages |
| /api/v1/messages/read | GET | display read messages |
| /api/v1/messages/:id | DELETE | remove a specific message |
| /api/v1/messages/sent/:senderId | GET | display message(s) sent by a specific user |
| /api/v1/messages | POST | add a message |
| /api/v1/contacts | GET | display all contacts |
| /api/v1/contacts/:email | GET | display a specific contact |
| /api/v1/contacts/:email | DELETE | remove a specific contact |
| /api/v1/contacts | POST | add a new contact |
| /api/v1/users | GET | display all users |
| /api/v1/users/:email | GET | display a specific user |
| /api/v1/users/:email | DELETE | remove a specific user |

### HOW CAN IT BE MANUAL TESTED
- Use [postman](https://www.getpostman.com/)to test out the API endpoints
