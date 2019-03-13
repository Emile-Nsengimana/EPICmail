import joi from 'joi';

const messageSchema = joi.object().keys({
  messageId: joi.number().required(),
  createdOn: joi.date(),
  subject: joi.string(),
  message: joi.string(),
  parentMessageId: joi.number().integer(),
  status: joi.string().alphanum().min(4).max(7)
    .required(),
});
export default messageSchema;
