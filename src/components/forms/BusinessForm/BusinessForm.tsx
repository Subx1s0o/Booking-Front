'use client';
import { useForm, Control } from 'react-hook-form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { BusinessFormInputs, businessFormSchema } from './businessForm';

interface BusinessFormProps {
    onSubmit: (data: { date: string; time: string }) => void;
    isSubmitting: boolean;
}

export default function BusinessForm({
    onSubmit,
    isSubmitting,
}: BusinessFormProps) {
    const { handleSubmit, control } = useForm<BusinessFormInputs>({
        defaultValues: { date: '', time: '' },
        resolver: zodResolver(businessFormSchema),
    });

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="my-5 flex flex-col gap-5"
        >
            <Input control={control} name="date" type="date" label="Date" />
            <Input control={control} name="time" type="time" label="Time" />
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
