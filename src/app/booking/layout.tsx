import MainTemplate from '@/components/common/MainTemplate';
import HomeSection from '@/components/sections/Home/HomeSection';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <MainTemplate>
            <main className="h-screen px-5">
                <section className={`h-full`}>
                    <div className="max-w-screen-ms">
                        <HomeSection />
                        {children}
                    </div>
                </section>
            </main>
        </MainTemplate>
    );
}
