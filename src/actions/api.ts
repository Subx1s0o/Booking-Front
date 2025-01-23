import axios from 'axios';
import Cookie from 'js-cookie';

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
    const token = Cookie.get('session');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
