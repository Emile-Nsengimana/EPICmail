import moment from 'moment';
import messages from '../models/message';

class messageController {
// ============================================= LIST ALL MESSAGES =======================
  static getAllMessages(req, res) {
    const chk = messages.length;
    if (chk === 0) {
      return res.status(404).json({
        status: 404,
        data: 'no message',
      });
    }
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
    const newMessage = {
      id,
      subject,
      message,
      parentMessageId,
      createdOn,
      status,
    };
    messages.push(newMessage);
    return res.status(200).json({
      status: 200,
      data: newMessage,
    });
  }
  // ============================================= DELETE MESSAGE =============================

  static removeMessage(req, res) {
    const { id } = parseInt(req.params, 10);
    const msg = messages.find(ct => ct.id === id);
    if (msg) {
      messages.pop(msg);
      return res.status(200).json({
        status: 200,
        data: 'message removed',
      });
    }
    return res.status(200).json({
      status: 200,
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
    if (unreads.length === 0) {
      return res.status(404).json({
        status: 404,
        data: 'no unread messages',
      });
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
    if (reads.length === 0) {
      return res.status(404).json({
        status: 404,
        data: 'no read messages',
      });
    }
    return res.status(200).json({
      status: 200,
      data: reads,
    });
  }
}
export default messageController;
