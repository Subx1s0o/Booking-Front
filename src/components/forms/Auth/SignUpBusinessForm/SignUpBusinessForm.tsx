import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import {
    signUpBusinessSchema,
    SignUpBusinessType,
} from './sign-up-business.schema';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { register } from '@/actions/register';

export default function SignUpBusinessForm() {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SignUpBusinessType>({
        resolver: zodResolver(signUpBusinessSchema),
    });

    const onSubmit: SubmitHandler<SignUpBusinessType> = async (data) => {
        const result = await register({ ...data, role: 'business' });

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
            <Input
                control={control}
                placeholder="Enter your phone"
                name="phone"
                type="number"
                label="Phone*"
            />
            <Input
                control={control}
                placeholder="Enter your address"
                name="address"
                label="Address*"
            />
            <Input
                control={control}
                placeholder="Enter your business"
                name="business"
                label="Your Business*"
            />

            <Input
                control={control}
                placeholder="Enter your password"
                name="password"
                label="Password*"
                eye
            />

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
