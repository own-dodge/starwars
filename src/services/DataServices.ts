import axios from 'axios';

const API_URL = 'https://swapi.dev/api/';

 class DataServices {
    getAll(): Promise<object> {
        return axios.get(`${API_URL}/people`)
    }
 }

 export default new DataServices();