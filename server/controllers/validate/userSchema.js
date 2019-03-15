import joi from 'joi';

const userSchema = joi.object().keys({
  userId: joi.string().required(),
  firstName: joi.string().min(3).max(15).required(),
  lastName: joi.string().min(3).max(15).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).max(30)
    .required(),
  phoneNo: joi.number().positive(),
});

export default userSchema;
