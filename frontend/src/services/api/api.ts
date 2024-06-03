import axios from "axios";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate()

// Base Url of the backend API
// TODO: Base URL needed to be decided based on the env(ie:dev/test/prod etc..) 
const baseURL = 'localhost:9000/'
const API_TIMEOUT = 1000

const api = axios.create({
    baseURL: baseURL,
    timeout: API_TIMEOUT
})

// Request Interceptor
// api.interceptors.request.use(
//     (config) => {
//         // Modify request config, e.g., add authorization token
//         const token = localStorage.getItem('authToken');
//         if (token) {
//             config.headers['Authorization'] = `Bearer ${token}`;
//         }
//         console.log('Request:', config);
//         return config;
//     },
//     (error) => {
//         // Handle request error
//         console.error('Request error:', error);
//         return Promise.reject(error);
//     }
// );

// Response Interceptor
api.interceptors.response.use(
    (response) => {
        // Process the response, e.g., log it
        console.log('Response:', response);
        return response;
    },
    (error) => {
        // Handle response error
        if (error.response.status === 401) {
            // Handle unauthorized error
            console.error('Unauthorized, redirecting to login...');
            navigate('/login')
        }
        return Promise.reject(error);
    }
);

export default api