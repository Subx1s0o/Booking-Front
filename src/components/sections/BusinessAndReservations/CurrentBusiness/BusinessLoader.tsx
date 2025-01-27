import React from 'react';

export default function BusinessLoader() {
    return (
        <div className="flex min-h-[400px] items-center justify-center">
            <p className="flex items-center gap-2 text-md">
                loading...
                <span className="loader" />
            </p>
        </div>
    );
}
