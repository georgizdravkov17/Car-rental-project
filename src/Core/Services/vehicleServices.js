import axios from 'axios';
import uuid from 'react-uuid';
import {
    apiUrl
} from '../../Helpers/constants';
import {
    vehicleSchema
} from '../../Validations/vehicleValidation';


export const getAllVehicles = () => {
    return axios.get(`${apiUrl}/vehicles`);
}

export const createVehicle = async (vehicleData) => {
    try {

        const isVehicleDataValid = await vehicleSchema.isValid(vehicleData);

        if (!isVehicleDataValid) {
            throw new Error("Invalid vehicle data!");
        }

        vehicleData.numberOfSeats = Number(vehicleData.numberOfSeats);
        vehicleData.price = Number(vehicleData.price);
        vehicleData.constructionYear = Number(vehicleData.constructionYear);
        vehicleData.avaliableCount = Number(vehicleData.avaliableCount);
        vehicleData.id = uuid();
        return axios.post(`${apiUrl}/vehicles`, vehicleData);
    } catch (err) {
        throw new Error(err.message);
    }
}

export const getVehicleById = (id) => {
  return axios.get(`${apiUrl}/vehicles/${id}`);
}

export const deleteVehicle = (id) => {
  return axios.delete(`${apiUrl}/vehicles/${id}`);
}

export const getLimitedVehiclesCount = (limit) => {
  return axios.get(`${apiUrl}/vehicles`, { params: { _limit: limit } });
}