// api/axiosClient.js
import axios from 'axios'
import queryString from 'query-string'
import firebase from 'firebase'

// Set up default config for https request here
// Look at 'https://github.com/axios/axios#request-config' to get more detail

const axiosClient = axios.create({
    baseURL : process.env.REACT_APP_API_URL,
    headers : {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        mode: 'no-cors',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...

    const currentUser = firebase.auth().currentUser;
    if(currentUser){
        const token = await currentUser.getIdToken();
        config.headers.Authorization=`Bearer ${token}`
    }
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if(response && response.data){
        return response.data;
    }
    return response;
    },
    (error) => {
        // handle Error
        console.log(error);
        throw error;
});

export default axiosClient;