import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const NunitoFont = Nunito({
    subsets: ['latin'],
});
export const metadata: Metadata = {
    title: 'Booking App',
    description: 'The boocking app for your life',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${NunitoFont.className} bg-grey antialiased`}>
                {children}
                <Toaster />
            </body>
        </html>
    );
}
