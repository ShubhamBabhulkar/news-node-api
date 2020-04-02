
    const Joi = require('joi');
    const mongoose = require('mongoose');
    const userSchema = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true
        },
    password: {
        type: String,
        maxlength:1024,
        required: true
    }
}));

function validateCustomer(user) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().required().email(),
        password: Joi.string().max(1024).required(),
    };
    return Joi.validate(user, schema);
};

exports.User = userSchema;
exports.validate = validateCustomer;
