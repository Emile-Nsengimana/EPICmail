import express from 'express';
import userController from '../controllers/userController';
import contactController from '../controllers/contactController';

const router = express.Router();


router.post('/api/v1/user', userController.addUser);
router.get('/api/v1/user', userController.getUsers);
router.get('/api/v1/user/:email', userController.getUser);
router.delete('/api/v1/user/:email', userController.removeUser);

router.post('/api/v1/contact', contactController.addContact);
router.get('/api/v1/contact', contactController.listContacts);

export default router;
