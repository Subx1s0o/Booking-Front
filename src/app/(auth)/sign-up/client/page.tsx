import SharedLayout from '@/components/common/SharedLayout';
import SignUpClient from '@/components/sections/Auth/SignUpClient/SignUpClient';

export default function ClientSignUpPage() {
    return (
        <SharedLayout className="min-h-[450px]">
            <SignUpClient />
        </SharedLayout>
    );
}
