import React, { Children } from 'react';

export default function SharedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen px-5">
            <div className="flex h-full flex-col items-center justify-center">
                <div className="max-w-screen-ms">{children}</div>
            </div>
        </div>
    );
}
