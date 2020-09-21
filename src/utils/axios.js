import axios from 'axios';
import axiosConfig from '../config/config.json';

const axiosClient = axios.create({
    baseURL: axiosConfig.services.base_url,
});

axiosClient.interceptors.request.use((config) => ({
    ...config,
    params: {
        apikey: axiosConfig.services.apikey,
        ...config.params
    }
}));

export { axiosClient }