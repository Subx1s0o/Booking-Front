/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import { Control, useController } from 'react-hook-form';

type FormInputProps = ComponentProps<'input'> & {
    control: Control<any>;
    label?: string;
    name: string;
};
export default function Input({
    control,
    name,
    label,
    className,
    ...inputProps
}: FormInputProps) {
    const {
        field,
        formState: { errors },
    } = useController({ control, name });

    return (
        <div className="flex flex-col">
            {label && (
                <label className="mb-2 text-xs font-bold uppercase">
                    {label}
                </label>
            )}
            <input
                {...field}
                {...control.register(name)}
                {...inputProps}
                className={cn(
                    `rounded-md border-2 border-black bg-transparent px-3 py-2 text-sm outline-none ${className}`,
                    {
                        'border-red': errors?.[name],
                    },
                )}
            />
            {errors[name] && (
                <p className="text-sm text-red">
                    {errors[name].message?.toString()}
                </p>
            )}
        </div>
    );
}
