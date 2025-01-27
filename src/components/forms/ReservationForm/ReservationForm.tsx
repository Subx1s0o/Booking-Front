'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/components/ui/Input';

import { zodResolver } from '@hookform/resolvers/zod';
import {
    BusinessFormInputs,
    businessFormSchema,
} from '../BusinessForm/businessFormSchema';

interface ReservationFormProps {
    id: string | undefined;
    children: React.ReactNode;
    date: string | null | undefined;
    isClosed: boolean;
    time: string | null | undefined;
    onUpdateReservationTime: (
        id: string,
        data: BusinessFormInputs,
    ) => Promise<void>;
}

export default function ReservationForm({
    id,
    children,
    date,
    isClosed,
    time,
    onUpdateReservationTime,
}: ReservationFormProps) {
    const { handleSubmit, control } = useForm<BusinessFormInputs>({
        defaultValues: {
            date: date ? new Date(date).toISOString().split('T')[0] : '',
            time: time || '',
        },
        resolver: zodResolver(businessFormSchema),
    });
    const onSubmit: SubmitHandler<BusinessFormInputs> = async (data) => {
        await onUpdateReservationTime(id || '', { ...data });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mb-5 flex flex-col gap-5"
        >
            <Input
                disabled={isClosed}
                control={control}
                name="date"
                type="date"
                label="Date"
            />
            <Input
                disabled={isClosed}
                control={control}
                name="time"
                type="time"
                label="Time"
            />
            {children}
        </form>
    );
}
