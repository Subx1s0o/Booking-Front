import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

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
            <body className={`${NunitoFont.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
