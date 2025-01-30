/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import { Control, useController } from 'react-hook-form';
import { useTogglePassword } from '@/hooks/useTogglePassword';
import Icon from './Icon';

type FormInputProps = ComponentProps<'input'> & {
    control: Control<any>;
    label?: string;
    name: string;
    eye?: boolean;
};
export default function Input({
    control,
    name,
    label,
    className,
    eye = false,
    ...inputProps
}: FormInputProps) {
    const {
        formState: { errors },
    } = useController({ control, name });
    const { toggleViewPassword, viewPassword } = useTogglePassword();
    return (
        <div className="flex flex-col">
            {label && (
                <label className="mb-2 text-xs font-bold uppercase">
                    {label}
                </label>
            )}
            <div className="relative">
                <input
                    {...control.register(name)}
                    {...inputProps}
                    className={cn(
                        `w-full rounded-md border-2 border-black bg-transparent px-3 py-2 text-base outline-none ${className}`,
                        {
                            'border-red': errors?.[name],
                        },
                    )}
                    type={
                        eye
                            ? viewPassword
                                ? 'text'
                                : 'password'
                            : inputProps.type
                    }
                />
                {eye && (
                    <button
                        type="button"
                        onClick={toggleViewPassword}
                        className="absolute bottom-1/2 right-3 translate-y-1/2"
                    >
                        <Icon
                            id={viewPassword ? 'icon-eye' : 'icon-closed-eye'}
                            w={24}
                            h={24}
                        />
                    </button>
                )}
            </div>
            {errors[name] && (
                <p className="mt-1 text-xs text-red">
                    {errors[name].message?.toString()}
                </p>
            )}
        </div>
    );
}
