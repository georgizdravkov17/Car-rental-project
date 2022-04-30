import * as yup from 'yup';

export const registerUserValidation = yup.object({
   firstname: yup.string().min(3).max(20).required(),
   lastname: yup.string().min(3).max(20).required(),
   email: yup.string().email().required(),
   tel: yup.string().length(10).required(),
   password: yup.string().min(6).max(30).required()
})

export const loginUserValidation = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(30).required()
})