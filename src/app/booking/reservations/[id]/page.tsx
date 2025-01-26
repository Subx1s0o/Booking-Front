import React from 'react';
import CurrentReservations from '@/components/sections/BusinessAndReservations/CurrentReservation/CurrentReservations';

export default async function CurrentReservationPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const id = (await params).id;
    return <CurrentReservations id={id} />;
}
