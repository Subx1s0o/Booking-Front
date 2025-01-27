import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { SignUpClientType, signUpClientSchema } from './sign-up-client.schema';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { register } from '@/actions/register';
import { useTogglePassword } from '@/hooks/useTogglePassword';
import Icon from '@/components/ui/Icon';

export default function SignUpClientForm() {
    const router = useRouter();
    const { toggleViewPassword, viewPassword } = useTogglePassword();
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
                <Input
                    control={control}
                    placeholder="First name"
                    name="firstName"
                    label="First Name*"
                />
                <Input
                    control={control}
                    placeholder="Second name"
                    name="secondName"
                    label="Second Name*"
                />
            </div>
            <Input
                control={control}
                placeholder="Enter your email"
                name="email"
                label="Email*"
            />
            <div className="relative">
                <Input
                    control={control}
                    placeholder="Enter your password"
                    name="password"
                    label="Password*"
                    type={viewPassword ? 'text' : 'password'}
                />
                <button
                    type="button"
                    onClick={toggleViewPassword}
                    className="absolute bottom-1.5 right-2"
                >
                    <Icon
                        id={viewPassword ? 'icon-eye' : 'icon-closed-eye'}
                        w={24}
                        h={24}
                    />
                </button>
            </div>
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
