'use client';
import { useForm } from 'react-hook-form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { BusinessFormInputs, businessFormSchema } from './businessFormSchema';

interface BusinessFormProps {
    onSubmit: (data: { date: string; time: string }) => void;
    isSubmitting: boolean;
}

export default function BusinessForm({
    onSubmit,
    isSubmitting,
}: BusinessFormProps) {
    const { handleSubmit, control } = useForm<BusinessFormInputs>({
        defaultValues: {
            date: new Date().toISOString().split('T')[0],
            time: '12:00',
        },

        resolver: zodResolver(businessFormSchema),
    });

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mb-5 flex flex-col gap-5"
        >
            <Input
                control={control}
                name="date"
                placeholder="DD.MM.YYYY"
                type="date"
                label="Date"
            />
            <Input
                control={control}
                placeholder="HH:MM"
                name="time"
                type="time"
                label="Time"
            />
            <Button
                disabled={isSubmitting}
                variant="black"
                type="submit"
                className="mb-5 w-full py-3"
            >
                {isSubmitting ? 'Loading...' : 'Make a reservation'}
            </Button>
        </form>
    );
}
