export default function SharedLayout({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <main className="h-screen px-5">
            <section
                className={`flex h-full flex-col justify-center ${className}`}
            >
                <div className="max-w-screen-ms">{children}</div>
            </section>
        </main>
    );
}
