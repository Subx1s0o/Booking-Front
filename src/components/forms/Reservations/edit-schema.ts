import { z } from 'zod';

export const updateReservationSchema = z.object({
    reservationDate: z
        .string()
        .nonempty({ message: 'Date is required' })
        .refine((date) => !isNaN(Date.parse(date)), {
            message: 'Invalid date format',
        }),
    time: z
        .string()
        .nonempty({ message: 'Time is required' })
        .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
            message: 'Invalid time format (HH:mm)',
        }),
    duration: z
        .string()
        .nonempty({ message: 'Duration is required' })
        .transform((value) => parseInt(value, 10))
        .refine((value) => !isNaN(value) && value >= 15, {
            message: 'Duration must be at least 15 minutes',
        }),
});
