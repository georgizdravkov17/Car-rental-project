import * as yup from 'yup';

export const vehicleSchema = yup.object({
    make: yup.string().min(3).max(20).required(),
    model: yup.string().min(3).max(20).required(),
    constructionYear: yup.number().min(2000).max(2022).required(),
    fuelType: yup.string().min(6).max(10).required(),
    numberOfSeats: yup.number().min(2).max(4).required(),
    picture: yup.string().min(10).required(),
    price: yup.number().min(1).max(10000).required(),
    avaliableCount: yup.number().min(1).max(30).required()
})