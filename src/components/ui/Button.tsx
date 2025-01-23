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
            className={cn(`rounded-md text-base ${className}`, {
                'bg-black text-white': variant === 'black',
                'border-2 border-black font-medium': variant === 'outline',
            })}
        >
            {children}
        </Component>
    );
}
