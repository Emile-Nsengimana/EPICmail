import uuidv1 from 'uuid/v1';

const contacts = [
  {
    contactId: uuidv1(),
    firstName: 'Emile',
    lastName: 'Nsengimana',
    email: 'emile@epicmail.rw',
  },
  {
    contactId: uuidv1(),
    firstName: 'Jack',
    lastName: 'Shema',
    email: 'shema@epicmail.rw',
  },
  {
    contactId: uuidv1(),
    firstName: 'Suzan',
    lastName: 'Uwase',
    email: 'suzan@epicmail.rw',
  },
];
export default contacts;
