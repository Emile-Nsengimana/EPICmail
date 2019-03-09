import group from '../models/group';

class groupController {
  static addGroup(req, res) {
    const { name } = req.body;
    const no = group.length + 1;
    const newGroup = {
      no,
      name,
    };
    group.push(newGroup);
    return res.status(200).json({
      status: 200,
      data: newGroup,
    });
  }

  static showGroups(req, res) {
    return res.status(200).json({
      status: 200,
      data: group,
    });
  }

  static getThisGroups(req, res) {
    const thatGroup = group.find(gr => gr.name === req.params.name);
    if (thatGroup) {
      return res.status(200).json({
        status: 200,
        data: thatGroup,
      });
    }
    return res.status(404).json({
      status: 404,
      data: ['Group not found'],
    });
  }

  static removeGroup(req, res) {
    const nm = req.params.name;
    const chk = group.find(g => g.name === nm);
    if (chk) {
      group.pop(chk);
      return res.status(200).json({
        status: 200,
        data: ['group removed'],
      });
    }
    return res.status(404).json({
      status: 404,
      data: [' group not found'],
    });
  }
}
export default groupController;
