import z from 'zod';

export const signUpClientSchema = z.object({
    firstName: z.string().trim().min(1, { message: 'First name is required' }),
    secondName: z
        .string()
        .trim()
        .min(1, { message: 'Second name is required' }),
    email: z.string().trim().email({ message: 'Invalid email format' }),
    password: z.string().trim().min(1, { message: 'Password is required' }),
});

export type SignUpClientType = z.infer<typeof signUpClientSchema>;
