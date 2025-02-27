'use client';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useUserStore } from '@/hooks/useUserStore';
import React from 'react';
import { useForm } from 'react-hook-form';
import { updateUserSchema, UpdateUserType } from './update-user.schema';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '@/actions/updateUser';
import { User } from '@/types';
import { toast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';

export default function UserSettingsForm({ close }: { close: () => void }) {
    const { user, setUser } = useUserStore();
    const queryClient = useQueryClient();
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<UpdateUserType>({
        defaultValues: {
            firstName: user?.firstName || '',
            secondName: user?.secondName || '',
            email: user?.email || '',
            phone: user?.phone ? String(user.phone) : undefined,
            business: user?.business || undefined,
            address: user?.address || undefined,
        },
        resolver: zodResolver(updateUserSchema),
    });

    const mutation = useMutation({
        mutationKey: ['users'],
        mutationFn: updateUser,
        onSuccess: (data: User) => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
            setUser(data);
        },
        onError: (error) => {
            toast({
                title: 'Error',
                description:
                    error instanceof Error
                        ? error.message
                        : 'An unexpected error occurred',
                variant: 'default',
            });
        },
    });

    const onSubmit = async (data: UpdateUserType) => {
        const updatedData = {
            ...data,
            phone: data.phone ? Number(data.phone) : undefined,
        };

        const result = await mutation.mutateAsync(updatedData);
        if (result) {
            toast({
                title: 'Success',
                description: 'User updated successfully',
                variant: 'default',
            });
            close();
        }
    };

    return (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            <Input
                control={control}
                placeholder="Enter your first name"
                name="firstName"
                label="First Name*"
            />
            <Input
                control={control}
                placeholder="Enter your second name"
                name="secondName"
                label="Second Name*"
            />
            <Input
                control={control}
                placeholder="Enter your email"
                name="email"
                label="Email*"
            />
            <Input
                control={control}
                type="number"
                placeholder="Enter your phone"
                name="phone"
                label="Phone"
            />
            {user?.role === 'business' && (
                <>
                    <Input
                        control={control}
                        placeholder="Enter your business"
                        name="business"
                        label="Your Business*"
                    />
                    <Input
                        control={control}
                        placeholder="Enter your address"
                        name="address"
                        label="Your Business Address*"
                    />
                </>
            )}
            <Button
                type="submit"
                variant="black"
                disabled={isSubmitting}
                className="py-3"
            >
                {isSubmitting ? 'Saving...' : 'Save'}
            </Button>
        </form>
    );
}
