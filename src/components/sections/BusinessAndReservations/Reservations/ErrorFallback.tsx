export default function ErrorFallback({ message }: { message: string }) {
    return (
        <div className="flex min-h-[400px] w-full items-center justify-center">
            <p className="text-balance text-center text-md">{message}</p>
        </div>
    );
}
