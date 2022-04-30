import React from 'react';
import {useState} from 'react';
import { createVehicle } from '../../../Core/Services/vehicleServices';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const VehicleForm = () => {

    const [vehicleData, setVehicleData] = useState({});

    const onInputChange = (event) => {
       event.persist();

       setVehicleData(prevState => {
           return {
               ...prevState,
               [event.target.name]: event.target.value
           }
       })
    }

    const onFormSubmit = (event) => {
      event.preventDefault();
      createVehicle(vehicleData)
      .then(_ => {
         console.log("Succesfully registered vehicle!");
      })
      .catch(err => {
          console.log(err.message);
      }) 
    }

    return(
        <div className="form-container">
            <form className="form" onSubmit={onFormSubmit}>
                <TextField variant="outlined" size="small" type="text" name="make" label="Vehicle make" required onChange={onInputChange} />
                <TextField variant="outlined" size="small" type="text" name="model" label="Vehicle model" required onChange={onInputChange} />
                <TextField variant="outlined" size="small" type="number" name="constructionYear" label="Vehicle construction year" required onChange={onInputChange} />
                
            <FormControl sx={{ m: 1  }} size="small">
                <InputLabel id="demo-select-small">Petrol type</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    label="Fuel type"
                    name="fuelType"
                    onChange={onInputChange}
                >
                    <MenuItem value="diesel">Diesel</MenuItem>
                    <MenuItem value="petrol">Petrol</MenuItem>
                    <MenuItem value="hybrid">Hybrid</MenuItem>
                    <MenuItem value="electric">Electric</MenuItem>
                    
                </Select>
                </FormControl>

                <FormControl sx={{ m: 1}}>
                    <InputLabel id="demo-select-small">Seats</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        name="numberOfSeats"
                        label="Number of seats"
                        onChange={onInputChange}
                    >
                        <MenuItem value={3}>2/3</MenuItem>
                        <MenuItem value={5}>4/5</MenuItem>
                    </Select>
                    </FormControl>
                <TextField variant="outlined" size="small" type="text" name="picture" label="Vehicle picture" required onChange={onInputChange}/>
                <TextField variant="outlined" size="small" type="number" name="price" label="Vehicle price per day" required onChange={onInputChange}/>
                <TextField variant="outlined" size="small" type="number" name="avaliableCount" label="Vehicle avaliable count" required onChange={onInputChange}/>
                <Button variant="contained" type="submit">Add Vehicle</Button>
            </form>
        </div>
    );
}

export default VehicleForm;