import { AnimatePresence } from 'framer-motion';
import EditReservations from '@/components/modals/EditReservations';

interface Props {
    isOpen: boolean;
    data: any;
    close: () => void;
}

const EditReservationModal = ({ isOpen, data, close }: Props) => (
    <AnimatePresence>
        {isOpen && data && (
            <EditReservations
                key="edit-modal"
                reservation={data}
                close={close}
            />
        )}
    </AnimatePresence>
);

export default EditReservationModal;
