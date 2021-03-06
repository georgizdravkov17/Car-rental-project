import axios from 'axios';

class Service{
    constructor(url){
       this.url = url;
    }

    getAll(limit){
        if(limit){
            return axios.get(this.url, { params: { _limit: limit } });
        }
        return axios.get(this.url);
    }

    getById(id){
        return axios.get(`${this.url}/${id}`);
    }

    create(data){
        return axios.post(this.url, data);
    }

    delete(id){
        return axios.delete(`${this.url}/${id}`);
    }

    update(id, data){
        return axios.put(`${this.url}/${id}`, data);
    }
}

export default Service;