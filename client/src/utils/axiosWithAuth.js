import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return axios.create({
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
    } else {
        return axios.create({});
    }
}