import MainTemplate from '@/components/common/MainTemplate';
import MainSection from '@/components/sections/Main/MainSection';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <MainTemplate>
            <main className="px-5">
                <section>
                    <div className="max-w-screen-ms">
                        <MainSection />
                        {children}
                    </div>
                </section>
            </main>
        </MainTemplate>
    );
}
