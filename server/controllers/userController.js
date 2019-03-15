import uuidv1 from 'uuid/v1';
import users from '../models/user';
import schema from './validate/userSchema';

class userController {
  // ================================== ADD USER =====================================
  static addUser(req, res) {
    const userId = uuidv1();
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNo,
    } = req.body;

    for (let i = 0; i < users.length; i += 1) {
      if (users[i].email === email) {
        return res.status(400).json({
          status: 400,
          message: ['email address already used, please try another one'],
        });
      }
    }

    const newUser = schema.validate({
      userId,
      firstName,
      lastName,
      email,
      password,
      phoneNo,
    });

    if (!newUser.error) {
      users.push(newUser.value);
      return res.status(201).json({
        status: 201,
        data: [newUser.value],
      });
    }
    if (newUser.error.details[0].context.key === 'phoneNo') {
      return res.status(400).json({
        status: 400,
        data: ['invalid phone number'],
      });
    }
    return res.status(400).json({
      status: 400,
      data: [newUser.error.details[0].message.replace('"', ' ').replace('"', '')],
    });
  }

  // ================================== GET ALL USER =====================================
  static getUsers(req, res) {
    return res.status(200).json({
      status: 200,
      data: users,
    });
  }

  // ================================== GET A SPECIFIC USER =====================================
  static getUser(req, res) {
    const { email } = req.params;
    const searchedUser = users.find(c => c.email === email);

    if (searchedUser) {
      return res.status(200).json({
        status: 200,
        data: searchedUser,
      });
    }
    return res.status(404).json({
      status: 404,
      error: 'User not found',
    });
  }

  // ================================== DELETE A USER =====================================
  static removeUser(req, res) {
    const { email } = req.params;
    const userToRemove = users.find(user => user.email === email);
    if (userToRemove) {
      users.pop(userToRemove);
      return res.status(200).json({
        status: 200,
        info: 'user removed',
      });
    }
    return res.status(404).json({
      status: 404,
      info: 'user not found',
    });
  }
}
export default userController;
