const Joi = require("@hapi/joi");

const registerValidation = (data) => {
	const schema = Joi.object({
		name: Joi.string().min(3).max(255).required(),
		email: Joi.string().min(10).max(255).required().email(),
		password: Joi.string().min(8).max(2084).required(),
	});
	return schema.validate(data);
};

const loginValidation = (data) => {
	const schema = Joi.object({
		email: Joi.string().min(10).max(255).required().email(),
		password: Joi.string().min(8).max(2084).required(),
	});
	return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
