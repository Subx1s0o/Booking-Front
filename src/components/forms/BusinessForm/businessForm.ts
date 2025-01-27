import { z } from 'zod';

export const businessFormSchema = z.object({
    date: z
        .string()
        .nonempty('Date is required')
        .refine((val) => !isNaN(new Date(val).getTime()), {
            message: 'Invalid date format',
        }),
    time: z
        .string()
        .nonempty('Time is required')
        .regex(/^([01]\d|2[0-3]):?([0-5]\d)$/, 'Invalid time format (HH:MM)'),
});

export type BusinessFormInputs = z.infer<typeof businessFormSchema>;
