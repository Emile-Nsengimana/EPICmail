import contacts from '../models/contact';

class contactController {
  static addContact(req, res) {
    const no = contacts.length + 1;
    const {
      firstName,
      lastName,
      email,
    } = req.body;
    const newContact = {
      no,
      firstName,
      lastName,
      email,
    };
    contacts.push(newContact);
    return res.status(200).json({
      status: 200,
      data: newContact,
    });
  }

  static listContacts(req, res) {
    const chk = contacts.length;
    if (chk === 0) {
      return res.status(404).json({
        status: 404,
        error: 'No contacts found',
      });
    }
    return res.status(200).json({
      status: 200,
      data: contacts,
    });
  }
}

export default contactController;
