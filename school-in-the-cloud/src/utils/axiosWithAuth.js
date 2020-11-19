import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://bwschoolinthecloud.herokuapp.com/api', // Will need to change this to correct API
        headers: {
            Authorization: token
        }
    })
}