import React from 'react';

export default function Loader() {
    return (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-grey">
            <h1 className="mb-3 text-lg font-bold">Booking App</h1>

            <p className="mb-2 flex items-center gap-3 text-base font-semibold">
                We are Loading now... <span className="loader"></span>
            </p>
        </div>
    );
}
