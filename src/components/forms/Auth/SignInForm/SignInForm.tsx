import React from 'react';
import Input from '../../../ui/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInType, signInSchema } from './sign-in.schema';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { login } from '@/actions/login';

import { useRouter } from 'next/navigation';

export default function SignInForm() {
    const router = useRouter();
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SignInType>({
        resolver: zodResolver(signInSchema),
    });

    const onSubmit: SubmitHandler<SignInType> = async (data) => {
        const result = await login(data);

        if (result) {
            router.push('/');
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-5"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                <Input control={control} name="email" label="Email" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
            >
                <Input control={control} name="password" label="Password" />
            </motion.div>
            <motion.div
                className="flex w-full flex-col gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <Button variant="black" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Logging in...' : 'Login'}
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
