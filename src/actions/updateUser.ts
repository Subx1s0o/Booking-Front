import { toast } from '@/hooks/use-toast';
import { AxiosError } from 'axios';
import { api } from './api';
import { User } from '@/types';

export const updateUser = async (data: Partial<User>) => {
    try {
        const res = await api.patch('/users', data);

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
    }
};
