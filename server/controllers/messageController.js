import moment from 'moment';
import messages from '../models/message';
import sents from '../models/sent';
import inbox from '../models/inbox';
import schema from './validate/messageSchema';

class messageController {
// ============================================= LIST ALL MESSAGES =======================
  static getAllMessages(req, res) {
    return res.status(200).json({
      status: 200,
      data: messages,
    });
  }
  // ============================================= ADD MESSAGE =============================

  static addMessage(req, res) {
    const messageId = messages.length + 1;
    const createdOn = moment.utc().format();
    const {
      subject,
      message,
      parentMessageId,
      status,
    } = req.body;
    const newMessage = schema.validate({
      messageId,
      subject,
      message,
      parentMessageId,
      createdOn,
      status,
    });
    if (!newMessage.error) {
      messages.push(newMessage.value);
      return res.status(201).json({
        status: 201,
        data: [newMessage.value],
      });
    }
    return res.status(400).json({
      status: 400,
      data: [newMessage.error.details[0].message.replace('"', '').replace('"', '')],
    });
  }
  // ============================================= DELETE MESSAGE =============================

  static removeMessage(req, res) {
    const messageToRemove = messages.find(msg => msg.id === parseInt(req.params.id, 10));
    if (messageToRemove) {
      messages.pop(messageToRemove);
      return res.status(200).json({
        status: 200,
        data: ['message removed'],
      });
    }
    return res.status(404).json({
      status: 404,
      data: 'message with the given id doesn\'t exist',
    });
  }
  // ============================================= UNREAD MESSAGES ==============================

  static unreadMessage(req, res) {
    const unreadMessage = [];
    for (let i = 0; i < messages.length; i += 1) {
      if (messages[i].status === 'unread') {
        unreadMessage.push(messages[i]);
      }
    }
    return res.status(200).json({
      status: 200,
      data: unreadMessage,
    });
  }
  //   ========================================== READ MESSAGES =================================

  static readMessage(req, res) {
    const readMessage = [];
    for (let i = 0; i < messages.length; i += 1) {
      if (messages[i].status === 'read') {
        readMessage.push(messages[i]);
      }
    }
    return res.status(200).json({
      status: 200,
      data: readMessage,
    });
  }
  //   ========================================== SENT MESSAGES =================================

  static sentMessage(req, res) {
    const senderId = parseInt(req.params.senderId, 10);
    const messageSent = [];
    for (let i = 0; i < messages.length; i += 1) {
      if (sents[i].senderId === senderId) {
        for (let j = 0; j < messages.length; j += 1) {
          if (messages[j].messageId === sents[i].messageId) {
            messageSent.push(messages[j]);
          }
        }
      }
    }
    if (messageSent.length === 0) {
      return res.status(404).json({
        status: 404,
        data: 'no messages sent for the user with that id',
      });
    }
    return res.status(200).json({
      status: 200,
      data: messageSent,
    });
  }

  //   ========================================== INBOX MESSAGES =================================
  static inboxMessage(req, res) {
    const receiverId = parseInt(req.params.receiverId, 10);
    const inboxMessage = [];
    for (let i = 0; i < messages.length; i += 1) {
      if (inbox[i].receiverId === receiverId) {
        for (let j = 0; j < messages.length; j += 1) {
          if (messages[j].messageId === inbox[i].messageId) {
            inboxMessage.push(messages[j]);
          }
        }
      }
    }
    if (inboxMessage.length === 0) {
      return res.status(404).json({
        status: 404,
        data: 'no inbox messages for the user with that id',
      });
    }
    return res.status(200).json({
      status: 200,
      data: inboxMessage,
    });
  }
}
export default messageController;
