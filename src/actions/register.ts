import { api } from './api';

export const register = async () => {
    try {
        const res = await api.post('/auth/register');
        return res.data;
    } catch (error) {
        console.log(error);
        return;
    }
};
