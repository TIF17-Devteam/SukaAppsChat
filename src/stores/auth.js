import { axiosClient } from '../utils/axios';
import config from '../config/config.json';

export const login = (data) => 
    axiosClient.post(`${config.services.auth_path}/api/auth/login`, data)
    .then(res => {
        const response = res.data;
        if (response.success) {
            axiosClient.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
        }
        return res.data;
    })
    .catch(err => 
        err.response ? 
        err.response.data : 
        {message: 'Something went wrong, please try again'})

export const logout = ({onSignOut}) => {
    delete axiosClient.defaults.headers.common['Authorization'];
    onSignOut();
}
