import * as yup from 'yup';

export const messageSchema = yup.object({
    email: yup.string().email().required(),
    message: yup.string().min(10).max(100).required()
})