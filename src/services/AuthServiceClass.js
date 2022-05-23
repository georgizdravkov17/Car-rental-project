import axios from 'axios';

class AuthService{
    constructor(url){
      this.url = url; 
    }

    login(data){
      return axios.post(this.url, data);
    }

    register(data){
        return axios.post(this.url, data);
    }
}

export default AuthService;