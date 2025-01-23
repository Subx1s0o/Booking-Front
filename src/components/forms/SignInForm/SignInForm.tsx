'use client';
import React from 'react';
import Input from '../../ui/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInSchema, signInSchema } from './sign-in.schema';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function SignInForm() {
    const { control, handleSubmit } = useForm<SignInSchema>({
        resolver: zodResolver(signInSchema),
    });

    const onSubmit: SubmitHandler<SignInSchema> = async (data) => {
        console.log(data);
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
                className="w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <Button variant="black">Login</Button>
            </motion.div>
        </form>
    );
}
