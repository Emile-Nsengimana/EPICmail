import joi from 'joi';

const contactSchema = joi.object().keys({
  no: joi.number().required(),
  firstName: joi.string().min(3).max(15).required(),
  lastName: joi.string().min(3).max(25).trim()
    .required(),
  email: joi.string().email().required(),
});
export default contactSchema;
