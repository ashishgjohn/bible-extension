import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://selahvie-backend.onrender.com/api',
    // timeout: 5000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export default axiosInstance;