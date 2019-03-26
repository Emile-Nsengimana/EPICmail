import joi from 'joi';

const groupSchema = joi.object().keys({
  groupNo: joi.string().required(),
  groupName: joi.string().alphanum().min(3).max(20)
    .required(),
});
export default groupSchema;
