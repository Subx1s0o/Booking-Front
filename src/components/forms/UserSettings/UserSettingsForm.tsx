'use client';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useUserStore } from '@/hooks/useUserStore';
import React from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
    firstName: string;
    secondName: string;
    email: string;
    phone?: string;
    job?: string;
    address?: string;
};

export default function UserSettingsForm() {
    const { user } = useUserStore();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<FormValues>({
        defaultValues: {
            firstName: user?.firstName || '',
            secondName: user?.secondName || '',
            email: user?.email || '',
            phone: user?.phone ? String(user.phone) : '',
            job: user?.job || '',
            address: user?.address || '',
        },
    });

    const onSubmit = async (data: FormValues) => {
        console.log(data);
    };

    return (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            <Input control={control} name="firstName" label="First Name*" />
            <Input control={control} name="secondName" label="Second Name*" />
            <Input control={control} name="email" label="Email*" />
            <Input control={control} name="phone" label="Phone" />
            {user?.role === 'business' && (
                <>
                    <Input control={control} name="job" label="Your Job*" />
                    <Input
                        control={control}
                        name="address"
                        label="Your Address*"
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
