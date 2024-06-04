import axios from 'axios'

// Base Url of the backend API
// TODO: Base URL needed to be decided based on the env(ie:dev/test/prod etc..)
const baseURL = 'http://localhost:9000'
const API_TIMEOUT = 1000

export const api = axios.create({
  baseURL: baseURL,
  timeout: API_TIMEOUT,
  withCredentials: true, // This will include cookies with requests
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
export const setupResponseInterceptors = (navigate: any) => {
  api.interceptors.response.use(
    response => {
      // Process the response, e.g., log it
      console.log('Response:', response)
      return response
    },
    error => {
      // Handle response error
      if (error.response.status === 403) {
        // Handle unauthorized error
        console.error('Unauthorized, redirecting to login...')
        navigate('/login')
      }
      return Promise.reject(error)
    },
  )
}
