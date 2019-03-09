import express from 'express';
import userController from '../controllers/userController';
import contactController from '../controllers/contactController';
import messageController from '../controllers/messageController';

const router = express.Router();

// ===================================== USER ROUTES ========================================
router.post('/api/v1/users', userController.addUser);
router.get('/api/v1/users', userController.getUsers);
router.get('/api/v1/users/:email', userController.getUser);
router.delete('/api/v1/users/:email', userController.removeUser);

// ===================================== CONTACT ROUTES =====================================
router.post('/api/v1/contacts', contactController.addContact);
router.get('/api/v1/contacts', contactController.listContacts);
router.get('/api/v1/contacts/:email', contactController.getOneContact);
router.delete('/api/v1/contacts/:email', contactController.removeContact);

// ===================================== MESSAGE ROUTES =====================================
router.post('/api/v1/messages', messageController.addMessage);
router.get('/api/v1/messages', messageController.getAllMessages);
router.get('/api/v1/messages/unread', messageController.unreadMessage);
router.get('/api/v1/messages/read', messageController.readMessage);
router.get('/api/v1/messages/sent/:senderId', messageController.sentMessage);
router.get('/api/v1/messages/inbox/:receiverId', messageController.inboxMessage);
router.delete('/api/v1/messages/:id', messageController.removeMessage);

// =====================================  ROUTES ============================================


export default router;
