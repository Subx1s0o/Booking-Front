import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SignInSchema } from '../SignInForm/sign-in.schema';
import {
    SignUpClientSchema,
    signUpClientSchema,
} from './sign-up-client.schema';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function SignUpClientForm() {
    const { control, handleSubmit } = useForm<SignUpClientSchema>({
        resolver: zodResolver(signUpClientSchema),
    });

    const onSubmit: SubmitHandler<SignInSchema> = async (data) => {
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
            <Input control={control} name="password" label="Password*" />
            <Button variant="black">Sign Up</Button>
        </form>
    );
}
