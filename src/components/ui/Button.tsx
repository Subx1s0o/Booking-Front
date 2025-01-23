import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

interface ButtonProps {
    children: React.ReactNode;
    asChild?: boolean;
    variant: 'black' | 'outline';
    className?: string;
}

export default function Button({
    children,
    asChild = false,
    variant,
    className,
}: ButtonProps) {
    const Component = asChild ? Slot : 'button';

    return (
        <Component
            className={cn(`w-full rounded-md py-2 text-base ${className}`, {
                'bg-black text-white': variant === 'black',
                'border-2 border-black bg-grey font-medium text-black':
                    variant === 'outline',
            })}
        >
            {children}
        </Component>
    );
}
