// import moment from 'moment';
import users from '../models/user';
import schema from './validate/userSchema';

class userController {
  // ================================== ADD USER =====================================
  static addUser(req, res) {
    const userId = users.length + 1;
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNo,
    } = req.body;

    const newUser = schema.validate({
      userId,
      firstName,
      lastName,
      email,
      password,
      phoneNo,
      // created_at: moment.utc().format(),
    });
    if (!newUser.error) {
      users.push(newUser);
      return res.status(200).json({
        status: 200,
        data: [newUser.value],
      });
    }
    return res.status(404).json({
      status: 404,
      data: [newUser.error.details[0].message.replace('"', ' ').replace('"', '')],
    });
  }

  // ================================== GET ALL USER =====================================
  static getUsers(req, res) {
    return res.json({
      status: 200,
      data: users,
    });
  }

  // ================================== GET A SPECIFIC USER =====================================
  static getUser(req, res) {
    const { email } = req.params;
    const usr = users.find(c => c.email === email);

    if (usr) {
      return res.status(200).json({
        status: 200,
        data: usr,
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
    const u = users.find(z => z.email === email);
    if (u) {
      users.pop(u);
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
