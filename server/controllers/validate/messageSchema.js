import joi from 'joi';

const messageSchema = joi.object().keys({
  messageId: joi.number().required().positive(),
  createdOn: joi.date(),
  subject: joi.string(),
  message: joi.string(),
  parentMessageId: joi.number().integer().positive(),
  status: joi.string().alphanum().min(4).max(7)
    .required(),
});
export default messageSchema;
