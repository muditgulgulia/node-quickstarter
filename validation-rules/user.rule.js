const BaseJoi = require("joi");
const Extension = require("joi-date-extensions");
const Joi = BaseJoi.extend(Extension);

module.exports = {
    create: {
        body: Joi.object().keys({
            id: Joi.label("User Number"),
            firstName: Joi.string().min(2).max(255).required().label("First Name"),
            lastName: Joi.string().min(2).max(255).required().label("Last Name"),
            email: Joi.string().email({ minDomainAtoms: 2 }).required().label("Email address"),
        })
    }
};