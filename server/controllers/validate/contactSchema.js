import joi from 'joi';

const contactSchema = joi.object().keys({
  contactId: joi.string().required(),
  firstName: joi.string().alphanum().min(3).max(15)
    .required(),
  lastName: joi.string().alphanum().min(3).max(25)
    .required(),
  email: joi.string().email().required(),
});
export default contactSchema;
