import axios from 'axios';

export const api = axios.create({ //aqui dentro vão as infos usadas em todas as requisições
    baseURL:'http://localhost:3000/api',
    headers: {}
})