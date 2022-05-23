import * as yup from 'yup';

const currentYear = new Date().getFullYear();

export const vehicleSchema = yup.object({
    brand: yup.string().min(3).max(30).required(),
    model: yup.string().min(2).max(15).required(),
    type: yup.string().min(4).max(15).required(),
    year: yup.number().min(1950).max(currentYear),
    fuel: yup.string().min(5).max(8).required(),
    numberOfSeats: yup.number.min(2).max(20).required(),
    picture: yup.string().required(),
    pricePerDay: yup.number().min(50).max(10000).required(),
    avaliableVehicles: yup.number().min(1).max(20).required()
});


