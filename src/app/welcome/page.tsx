import WelcomeButtons from '@/components/sections/Welcome/WelcomeButtons';
import WelcomeContent from '@/components/sections/Welcome/WelcomeContent';

export default function WelcomePage() {
    return (
        <div className="h-screen px-5">
            <div className="flex h-full flex-col items-center justify-center">
                <div className="max-w-screen-ms">
                    <WelcomeContent />
                    <WelcomeButtons />
                </div>
            </div>
        </div>
    );
}
