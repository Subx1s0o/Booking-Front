'use client';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useReservationManage } from '@/hooks/useReservationManage';
import { Reservation } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UpdateReservationType } from 'types/updateReservation';
import { updateReservationSchema } from './edit-schema';

export default function UpdateReservationForm({
    reservation,
    close,
}: {
    close: () => void;
    reservation: Reservation | null;
}) {
    const { handleUpdateReservation } = useReservationManage(close);
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm({
        defaultValues: {
            reservationDate: reservation?.reservationDate
                ? new Date(reservation.reservationDate)
                      .toISOString()
                      .split('T')[0]
                : undefined,
            time: reservation?.time || '',
            duration: reservation?.duration || undefined,
        },
        resolver: zodResolver(updateReservationSchema),
    });

    const onSubmit: SubmitHandler<{
        reservationDate: string | undefined;
        time: string;
        duration: number | undefined;
    }> = async (data) => {
        const updatedData: UpdateReservationType = {
            ...data,
            reservationDate: data.reservationDate
                ? new Date(data.reservationDate)
                : undefined,
        };

        await handleUpdateReservation(reservation?.id || '', updatedData);
    };

    return (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
                <Input
                    control={control}
                    type="date"
                    name="reservationDate"
                    label="Reservation Date"
                    placeholder="Select a date"
                />
                <Input
                    control={control}
                    type="time"
                    name="time"
                    label="Time"
                    placeholder="Enter time"
                />
                <Input
                    control={control}
                    name="duration"
                    label="Duration"
                    type="number"
                    placeholder="Enter duration in minutes"
                />
            </div>
            <Button
                variant="black"
                type="submit"
                className="py-3"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Editing...' : 'Updating Reservation'}
            </Button>
        </form>
    );
}
