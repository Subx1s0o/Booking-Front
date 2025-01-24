export default function SharedLayout({
    children,
    className = '',
    mainClassName = '',
}: {
    children: React.ReactNode;
    className?: string;
    mainClassName?: string;
}) {
    return (
        <main className={`h-screen px-5 ${mainClassName}`}>
            <section
                className={`flex h-full flex-col justify-center ${className}`}
            >
                <div className="max-w-screen-ms">{children}</div>
            </section>
        </main>
    );
}
