import React, { Children } from 'react';

export default function SharedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="h-screen px-5">
            <section className="flex h-full flex-col justify-center">
                <div className="max-w-screen-ms">{children}</div>
            </section>
        </main>
    );
}
