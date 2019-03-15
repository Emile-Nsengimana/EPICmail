import uuidv1 from 'uuid/v1';
import contacts from '../models/contact';
import schema from './validate/contactSchema';

class contactController {
  // ================================= ADD CONTACT =============================
  static addContact(req, res) {
    const contactId = uuidv1();
    const {
      firstName,
      lastName,
      email,
    } = req.body;
    const newContact = schema.validate({
      contactId,
      firstName,
      lastName,
      email,
    });
    if (!newContact.error) {
      contacts.push(newContact.value);
      return res.status(201).json({
        status: 201,
        data: [newContact.value],
      });
    }
    return res.status(400).json({
      status: 400,
      data: [newContact.error.details[0].message.replace('"', ' ').replace('"', '')],
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
        data: ['contact removed successful'],
      });
    }
    return res.status(404).json({
      status: 404,
      data: [`contact with email: ${email} does not exist`],
    });
  }
}

export default contactController;
