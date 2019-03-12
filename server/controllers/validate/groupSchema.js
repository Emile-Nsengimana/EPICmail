import joi from 'joi';

const groupSchema = joi.object().keys({
  id: joi.number().required(),
  name: joi.string().alphanum().min(3).max(20)
    .required(),
});
export default groupSchema;
