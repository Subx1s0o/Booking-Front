import UserMenu from './UserMenu';

export default function Header() {
    return (
        <header className="absolute top-0 flex w-[calc(100%-40px)] items-center justify-between py-10">
            <h2 className="text-md font-bold">Booking App</h2>
            <UserMenu />
        </header>
    );
}
