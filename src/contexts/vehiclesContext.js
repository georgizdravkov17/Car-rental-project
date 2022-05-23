import { useState, useEffect, createContext } from 'react';
import Service from '../services/ServiceClass.js';
import { base_URL } from '../helpers/constants.js';

const vehicles_URL = `${base_URL}/vehicles`;

export const VehiclesContext = createContext();

export const VehiclesProvider = ({children}) => {

    const [vehicles, setVehicles] = useState([]);

    const vehicleService = new Service(vehicles_URL);

    useEffect(() => {
       vehicleService.getAll()
       .then(response => {
           setVehicles(response.data);
       })
       .catch(err => {
           console.log(err);
       })
    }, [])

    return(
        <VehiclesContext.Provider value={{vehicles}}>
            {children}
        </VehiclesContext.Provider>
    )
}