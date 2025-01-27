import { AxiosError, AxiosResponse } from 'axios';
import { api } from './api';
import { toast } from '@/hooks/use-toast';
import Cookies from 'js-cookie';
import { useUserStore } from '@/hooks/useUserStore';
export const updateUserPhoto = async (
    formData: FormData,
): Promise<string | undefined> => {
    try {
        const res: AxiosResponse<{ photoUrl: string }> = await api.patch(
            '/users/photo',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${Cookies.get('session')}`,
                },
            },
        );

        toast({
            title: 'Success',
            description: 'Photo updated successfully!',
            variant: 'default',
        });

        const user = useUserStore.getState().user;
        if (user) {
            user.photo = res.data.photoUrl;
            useUserStore.getState().setUser(user);
        }
        return res.data.photoUrl;
    } catch (error) {
        if (error instanceof AxiosError) {
            toast({
                title: 'Error',
                description:
                    error.response?.data?.message ||
                    'An unexpected error occurred during the photo update.',
                variant: 'destructive',
            });
        } else {
            toast({
                title: 'Error',
                description: 'An unexpected error occurred.',
                variant: 'destructive',
            });
        }
        return undefined;
    }
};
