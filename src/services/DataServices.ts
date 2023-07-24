import axios from 'axios';
import ResponseData from '@/types/ResponseData';

const API_URL = 'https://swapi.dev/api/';

 class DataServices {
    getAll(): Promise<ResponseData> {
        return axios.get(`${API_URL}/people`)
    }
 }

 export default new DataServices();