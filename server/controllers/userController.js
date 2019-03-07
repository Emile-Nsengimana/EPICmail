// import moment from 'moment';
import users from '../models/user';

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

    const newUser = {
      userId,
      firstName,
      lastName,
      email,
      password,
      phoneNo,
      // created_at: moment.utc().format(),
    };
    users.push(newUser);
    return res.status(200).json({
      status: 200,
      data: newUser,
    });
  }

  // ================================== GET ALL USER =====================================
  static getUsers(req, res) {
    const no = users.length;
    if (no === 0) {
      return res.json({
        status: '404',
        error: 'No user found',
      });
    }
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
    return res.status(200).json({
      status: 404,
      info: 'user not found',
    });
  }
}
export default userController;
