import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { SignUpClientType, signUpClientSchema } from './sign-up-client.schema';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { register } from '@/actions/register';

export default function SignUpClientForm() {
    const router = useRouter();
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SignUpClientType>({
        resolver: zodResolver(signUpClientSchema),
    });

    const onSubmit: SubmitHandler<SignUpClientType> = async (data) => {
        const result = await register({ ...data, role: 'client' });
        if (result) {
            router.push('/');
        }
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
            <motion.div
                className="flex w-full flex-col gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
            >
                <Button variant="black" disabled={isSubmitting} type="submit">
                    {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                </Button>
                <Button
                    variant="outline"
                    type="button"
                    onClick={() => router.back()}
                >
                    Go Back
                </Button>
            </motion.div>
        </form>
    );
}
