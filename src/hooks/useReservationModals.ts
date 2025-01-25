import { Reservation } from '@/types';
import { useState } from 'react';

export function useReservationModals() {
    const [choosedReservation, setChoosedReservation] =
        useState<Reservation | null>(null);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);

    const openEditModal = () => setIsModalEditOpen(true);
    const closeModals = () => {
        setIsModalEditOpen(false);
        setChoosedReservation(null);
    };

    return {
        choosedReservation,
        setChoosedReservation,
        isModalEditOpen,
        openEditModal,
        closeModals,
    };
}
