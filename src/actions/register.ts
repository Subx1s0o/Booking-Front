import { SignUpClientType } from '@/components/forms/Auth/SignUpClientForm/sign-up-client.schema';
import { api } from './api';
import { SignUpBusinessType } from '@/components/forms/Auth/SignUpBusinessForm/sign-up-business.schema';
import { AxiosError, AxiosResponse } from 'axios';
import { toast } from '@/hooks/use-toast';
import { ResponseType } from '@/types';
import Cookies from 'js-cookie';

export const register = async (
    data:
        | SignUpClientType
        | (SignUpBusinessType & { role: 'client' | 'business' }),
) => {
    try {
        const res: AxiosResponse<ResponseType> = await api.post(
            '/auth/register',
            data,
        );

        Cookies.set('session', res.data.sessionToken);
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
