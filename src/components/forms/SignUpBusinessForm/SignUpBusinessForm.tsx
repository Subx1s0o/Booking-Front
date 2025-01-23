import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import {
    signUpBusinessSchema,
    SignUpBusinessType,
} from './sign-up-business.schema';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function SignUpBusinessForm() {
    const { control, handleSubmit } = useForm<SignUpBusinessType>({
        resolver: zodResolver(signUpBusinessSchema),
    });

    const onSubmit: SubmitHandler<SignUpBusinessType> = async (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-5">
                <Input control={control} name="firstName" label="First Name*" />
                <Input
                    control={control}
                    name="secondName"
                    label="Second Name*"
                />
            </div>
            <Input control={control} name="email" label="Email*" />
            <Input control={control} name="address" label="Address*" />
            <Input control={control} name="job" label="Your Job*" />
            <Input control={control} name="password" label="Password*" />
            <Button variant="black">Sign Up</Button>
        </form>
    );
}
