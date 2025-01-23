import SharedLayout from '@/components/common/SharedLayout';
import WelcomeButtons from '@/components/sections/Welcome/WelcomeButtons';
import WelcomeContent from '@/components/sections/Welcome/WelcomeContent';

export default function WelcomePage() {
    return (
        <SharedLayout>
            <WelcomeContent />
            <WelcomeButtons />
        </SharedLayout>
    );
}
