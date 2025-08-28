import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE = 'https://enhanced-obviously-panther.ngrok-free.app';

const api = axios.create({
    baseURL: API_BASE,
    headers: {
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

export const uploadFetch = async (endpoint, formData, method = 'POST', customHeaders = {}) => {
    try {
        const token = await AsyncStorage.getItem('authToken');
        if (!token) {
            throw new Error('No hay token de autenticación');
        }

        const response = await api.request({
            url: endpoint,
            method,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
                ...customHeaders
            },
        });
        return response.data;
    } catch (err) {
        console.error('Error in uploadFetch:', err?.response?.data || err.message);
        throw err;
    }
};

export const createFormData = (data, fileFieldName = 'image', fileData = null) => {
    const formData = new FormData();
    
    Object.keys(data).forEach(key => {
        if (data[key] !== null && data[key] !== undefined) {
            formData.append(key, String(data[key]));
        }
    });
    
    if (fileData) {
        formData.append(fileFieldName, {
            uri: fileData.uri,
            type: fileData.type || 'image/jpeg',
            name: fileData.name || 'file.jpg'
        });
    }
    
    return formData;
};

export const uploadFile = async (endpoint, fileData, fileFieldName = 'image', additionalData = {}, method = 'POST') => {
    const formData = createFormData(additionalData, fileFieldName, fileData);
    return await uploadFetch(endpoint, formData, method);
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