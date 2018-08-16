import axios from "axios"

const instance = axios.create({
    baseURL: 'https://gank.io/api/data/',
    timeout: 5000,
});

export default instance