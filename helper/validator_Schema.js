const joi = require('@hapi/joi');

const AdminLoginRagisterSchema = joi.object({
    email:joi.string().email().lowercase().required(),
    password:joi.string().min(4)
})

const ForgotPasswordSchema = joi.object({
    email:joi.string().email().lowercase().required(),
})

const ResetPasswordSchema = joi.object({
    password:joi.string().pattern(new RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$')),
    confirm_password:joi.ref('password')
    

})



module.exports = {
    AdminLoginRagisterSchema,
    ForgotPasswordSchema,
    ResetPasswordSchema
}