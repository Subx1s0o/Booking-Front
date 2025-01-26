import CurrentBusiness from '@/components/sections/BusinessAndReservations/CurrentBusiness/CurrentBusiness';

export default async function CurrentBusinessPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const id = (await params).id;

    return <CurrentBusiness id={id} />;
}
