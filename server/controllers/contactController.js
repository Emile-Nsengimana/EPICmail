import contacts from '../models/contact';

class contactController {
  // ================================= ADD CONTACT =============================
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

  // ================================= LIST ALL CONTACTS ==========================
  static listContacts(req, res) {
    return res.status(200).json({
      status: 200,
      data: contacts,
    });
  }
  // ================================= GET SPECIFIC CONTACT =======================

  static getOneContact(req, res) {
    const { email } = req.params;
    const contact = contacts.find(c => c.email === email);
    if (contact) {
      return res.status(200).json({
        status: 200,
        data: contact,
      });
    }
    return res.status(404).json({
      status: 404,
      data: 'contact not found!',
    });
  }

  // ================================= DELETE A CONTACT ============================
  static removeContact(req, res) {
    const { email } = req.params;
    const contact = contacts.find(ct => ct.email === email);
    if (contact) {
      contacts.pop(contact);
      return res.status(200).json({
        status: 200,
        data: 'contact removed',
      });
    }
    return res.status(404).json({
      status: 404,
      data: 'contact doesn\'t exist',
    });
  }
}

export default contactController;
