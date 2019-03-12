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
    const id = messages.length + 1;
    const createdOn = moment.utc().format();
    const {
      subject,
      message,
      parentMessageId,
      status,
    } = req.body;
    const newMessage = schema.validate({
      id,
      subject,
      message,
      parentMessageId,
      createdOn,
      status,
    });
    if (!newMessage.error) {
      messages.push(newMessage);
      return res.status(200).json({
        status: 200,
        data: [newMessage.value],
      });
    }
    return res.status(404).json({
      status: 404,
      data: [newMessage.error.details[0].message.replace('"', '').replace('"', '')],
    });
  }
  // ============================================= DELETE MESSAGE =============================

  static removeMessage(req, res) {
    const msg = messages.find(ct => ct.id === parseInt(req.params.id, 10));
    if (msg) {
      messages.pop(msg);
      return res.status(200).json({
        status: 200,
        data: 'message removed',
      });
    }
    return res.status(404).json({
      status: 404,
      data: 'message with the given id doesn\'t exist',
    });
  }
  // ============================================= UNREAD MESSAGES ==============================

  static unreadMessage(req, res) {
    const unreads = [];
    for (let i = 0; i < messages.length; i += 1) {
      if (messages[i].status === 'unread') {
        unreads.push(messages[i]);
      }
    }
    return res.status(200).json({
      status: 200,
      data: unreads,
    });
  }
  //   ========================================== READ MESSAGES =================================

  static readMessage(req, res) {
    const reads = [];
    for (let i = 0; i < messages.length; i += 1) {
      if (messages[i].status === 'read') {
        reads.push(messages[i]);
      }
    }
    return res.status(200).json({
      status: 200,
      data: reads,
    });
  }
  //   ========================================== SENT MESSAGES =================================

  static sentMessage(req, res) {
    const sid = parseInt(req.params.senderId, 10);
    const viewMsg = [];
    for (let i = 0; i < messages.length; i += 1) {
      if (sents[i].senderId === sid) {
        for (let j = 0; j < messages.length; j += 1) {
          if (messages[j].id === sents[i].messageId) {
            viewMsg.push(messages[j]);
          }
        }
      }
    }
    if (viewMsg.length === 0) {
      return res.status(400).json({
        status: 404,
        data: 'no messages sent for the user with that id',
      });
    }
    return res.status(200).json({
      status: 200,
      data: viewMsg,
    });
  }

  //   ========================================== INBOX MESSAGES =================================
  static inboxMessage(req, res) {
    const sid = parseInt(req.params.receiverId, 10);
    const inboxMsg = [];
    for (let i = 0; i < messages.length; i += 1) {
      if (inbox[i].receiverId === sid) {
        for (let j = 0; j < messages.length; j += 1) {
          if (messages[j].id === inbox[i].messageId) {
            inboxMsg.push(messages[j]);
          }
        }
      }
    }
    if (inboxMsg.length === 0) {
      return res.status(400).json({
        status: 400,
        data: 'no inbox messages for the user with that id',
      });
    }
    return res.status(200).json({
      status: 200,
      data: inboxMsg,
    });
  }
}
export default messageController;
