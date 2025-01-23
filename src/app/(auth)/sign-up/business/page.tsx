import SharedLayout from '@/components/common/SharedLayout';
import SignUpBusiness from '@/components/sections/Auth/SignUpBusiness/SignUpBusiness';

export default function BusinessSignUpPage() {
    return (
        <SharedLayout className="min-h-[850px]">
            <SignUpBusiness />
        </SharedLayout>
    );
}
