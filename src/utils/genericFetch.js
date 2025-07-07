import axios from 'axios';

const API_BASE = 'https://enhanced-obviously-panther.ngrok-free.app';

const api = axios.create({
    baseURL: API_BASE,
    headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
    },
});

const genericFetch = async (endpoint, method = 'GET', data = null, customHeaders = {}) => {
    try {
        const response = await api.request({
            url: endpoint,
            method,
            data,
            headers: customHeaders,
        });
        return response.data;
    } catch (err) {
        console.error('Error in genericFetch:', err?.response?.data || err.message);
        throw err;
    }
};

export default genericFetch;