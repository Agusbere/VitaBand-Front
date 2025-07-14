import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE = 'https://enhanced-obviously-panther.ngrok-free.app';

const api = axios.create({
    baseURL: API_BASE,
    headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
    },
});

api.interceptors.request.use(
    async (config) => {
        try {
            const token = await AsyncStorage.getItem('authToken');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        } catch (error) {
            console.log('Error obteniendo token:', error);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            await AsyncStorage.removeItem('authToken');
            console.log('Token inválido, removido del storage');
        }
        return Promise.reject(error);
    }
);

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

export const authenticatedFetch = async (endpoint, method = 'GET', data = null) => {
    const token = await AsyncStorage.getItem('authToken');
    if (!token) {
        throw new Error('No hay token de autenticación');
    }

    return genericFetch(endpoint, method, data, {
        Authorization: `Bearer ${token}`
    });
};

export const saveAuthToken = async (token) => {
    try {
        await AsyncStorage.setItem('authToken', token);
    } catch (error) {
        console.error('Error guardando token:', error);
    }
};

export const getAuthToken = async () => {
    try {
        return await AsyncStorage.getItem('authToken');
    } catch (error) {
        console.error('Error obteniendo token:', error);
        return null;
    }
};

export const removeAuthToken = async () => {
    try {
        await AsyncStorage.removeItem('authToken');
    } catch (error) {
        console.error('Error removiendo token:', error);
    }
};

export default genericFetch;