const messages = [
  {
    messageId: 1,
    createdOn: '12-03-2019',
    subject: 'Final year report',
    message: 'The final report will be available next week',
    parentMessageId: 1,
    status: 'read',
  },
  {
    messageId: 2,
    createdOn: '12-03-2019',
    subject: 'Student association',
    message: 'You are invited to the student association on 23rd march, 2020',
    parentMessageId: 1,
    status: 'unread',
  },
  {
    messageId: 3,
    createdOn: '12-03-2019',
    subject: 'Final year report',
    message: 'The final report will be available next week',
    parentMessageId: 2,
    status: 'read',
  },

];

export default messages;
