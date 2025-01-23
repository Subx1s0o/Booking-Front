import SharedLayout from '@/components/common/SharedLayout';
import SignUpClient from '@/components/sections/SignUpClient/SignUpClient';

export default function ClientSignUpPage() {
    return (
        <SharedLayout className="min-h-[850px]">
            <SignUpClient />
        </SharedLayout>
    );
}
