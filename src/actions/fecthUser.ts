import { AxiosError, AxiosResponse } from 'axios';
import { api } from './api';
import { User } from 'types/user';
import { toast } from '@/hooks/use-toast';

export const fecthUser = async () => {
    try {
        const res: AxiosResponse<User> = await api.get('/users/me');
        return res.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            toast({
                title: 'Error',
                description:
                    error.response?.data?.message ||
                    'An unexpected error occurred',
                variant: 'default',
            });
        } else {
            toast({
                title: 'Error',
                description: 'An unexpected error occurred',
                variant: 'default',
            });
        }
        return;
    }
};
