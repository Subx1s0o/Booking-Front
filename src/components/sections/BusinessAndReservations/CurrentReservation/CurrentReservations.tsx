'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchCurrentReservation } from '@/actions/fetchCurrentReservation';
import ErrorFallback from '@/components/common/ErrorFallback';
import { useUserStore } from '@/hooks/useUserStore';
import { useReservationManage } from '@/hooks/useReservationManage';
import CurrentReservationHeader from './CurrentReservationHeader';
import ClientInfo from './ClientInfo';
import BusinessInfo from './BusinessInfo';
import ReservationActions from './ReservationActions';
import Image from 'next/image';

import ReservationForm from '@/components/forms/ReservationForm/ReservationForm';
import { useRouter } from 'next/navigation';
export default function CurrentReservations({ id }: { id: string }) {
    const router = useRouter();
    const { data, isLoading, error } = useQuery({
        queryKey: ['reservation', id],
        queryFn: async () => await fetchCurrentReservation(id, router),
    });

    const {
        isLoading: isLoadingManage,
        handleDeleteReservation,
        handleCloseReservation,
        handleUpdateReservationTime,
        isUpdating,
    } = useReservationManage();
    const { user } = useUserStore();

    if (!data && isLoading) {
        return (
            <div className="flex min-h-[400px] items-center justify-center">
                <p className="flex items-center gap-2 text-md">
                    loading...
                    <span className="loader" />
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <ErrorFallback message="There was an error loading the reservation." />
        );
    }

    return (
        <div className="flex flex-col">
            <div className="relative mb-5 h-48 w-full">
                <Image
                    src={data?.businessUser?.photo || '/images/placeholder.png'}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                />
            </div>
            <CurrentReservationHeader
                status={data?.status || 'unknown'}
                business={data?.businessUser?.business}
            />
            {user?.role === 'client' ? (
                <BusinessInfo
                    firstName={data?.businessUser?.firstName || '--'}
                    secondName={data?.businessUser?.secondName || '--'}
                    email={data?.businessUser?.email || '--'}
                    address={data?.businessUser?.address || '--'}
                    phone={
                        data?.businessUser?.phone
                            ? String(data?.businessUser?.phone)
                            : '--'
                    }
                />
            ) : (
                <ClientInfo
                    firstName={data?.clientUser?.firstName || '--'}
                    secondName={data?.clientUser?.secondName || '--'}
                    email={data?.clientUser?.email || '--'}
                    phone={
                        data?.clientUser?.phone
                            ? String(data?.clientUser?.phone)
                            : '--'
                    }
                />
            )}

            <ReservationForm
                id={data?.id}
                date={data?.date}
                time={data?.time}
                isClosed={data?.status === 'closed'}
                onUpdateReservationTime={handleUpdateReservationTime}
            >
                <ReservationActions
                    isLoadingManage={isLoadingManage}
                    isUpdating={isUpdating}
                    status={data?.status || 'unknown'}
                    onCloseClick={() => handleCloseReservation(id)}
                    onDeleteClick={() => handleDeleteReservation(id)}
                />
            </ReservationForm>
        </div>
    );
}
