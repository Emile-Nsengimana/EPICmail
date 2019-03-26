import uuidv1 from 'uuid/v1';
import group from '../models/group';
import schema from './validate/groupSchema';

class groupController {
  static addGroup(req, res) {
    const { groupName } = req.body;
    const groupId = uuidv1();
    const newGroup = schema.validate({
      groupId,
      groupName,
    });
    group.push(newGroup.value);
    return res.status(201).json({
      status: 201,
      data: newGroup.value,
    });
  }

  static showGroups(req, res) {
    return res.status(200).json({
      status: 200,
      data: group,
    });
  }

  static getThisGroups(req, res) {
    const userGroup = group.find(gr => gr.groupName === req.params.groupName);
    if (userGroup) {
      return res.status(200).json({
        status: 200,
        data: userGroup,
      });
    }
    return res.status(404).json({
      status: 404,
      data: ['Group not found'],
    });
  }

  static removeGroup(req, res) {
    const groupToRemove = group.find(g => g.groupName === req.params.groupName);
    if (groupToRemove) {
      group.pop(groupToRemove);
      return res.status(200).json({
        status: 200,
        data: [`${req.params.groupName} removed successful!`],
      });
    }
    return res.status(404).json({
      status: 404,
      data: [`group (${req.params.groupName}) does not exist!`],
    });
  }
}
export default groupController;
