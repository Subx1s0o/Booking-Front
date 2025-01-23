import { SignInType } from '@/components/forms/SignInForm/sign-in.schema';
import { AxiosError } from 'axios';
import { api } from './api';
import { toast } from '@/hooks/use-toast';

export const login = async (data: SignInType) => {
    try {
        const res = await api.post('/auth/login', data);
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
