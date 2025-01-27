import { User } from '@/types';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { updateUserPhoto } from '@/actions/updateUserPhoto';
import { useQueryClient } from '@tanstack/react-query';

export default function ManageBusiness({ user }: { user: User | null }) {
    const [uploading, setUploading] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const queryClient = useQueryClient();

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);

            const formData = new FormData();
            formData.append('photo', file);

            try {
                setUploading(true);

                await updateUserPhoto(formData);

                queryClient.invalidateQueries({ queryKey: ['users'] });
                queryClient.invalidateQueries({
                    queryKey: ['business-users'],
                    exact: false,
                });
                queryClient.invalidateQueries({
                    queryKey: ['reservations'],
                    exact: false,
                });

                toast({
                    title: 'Success',
                    description: 'Photo updated successfully!',
                    variant: 'default',
                });
            } catch (error) {
                toast({
                    title: 'Error',
                    description: 'Failed to update photo. Please try again.',
                    variant: 'destructive',
                });
            } finally {
                setUploading(false);
            }
        } else {
            toast({
                title: 'Error',
                description: 'No file selected!',
                variant: 'destructive',
            });
        }
    };

    return (
        <div className="h-[calc(100vh-300px)]">
            <div className="flex h-full w-full flex-col items-center justify-center">
                <div className="relative mb-10 h-48 w-full">
                    <img
                        src={
                            selectedImage ||
                            user?.photo ||
                            '/images/placeholder.png'
                        }
                        alt="User's photo"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>

                <h1 className="mb-7 text-balance text-center text-md font-semibold">
                    Change your business photo
                </h1>
                <div className="relative">
                    <input
                        type="file"
                        accept="image/*"
                        name="photo"
                        id="photo-upload"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    <label
                        htmlFor="photo-upload"
                        className="cursor-pointer rounded-md bg-black px-4 py-3 text-white"
                    >
                        {uploading ? 'Uploading...' : 'Upload Photo'}
                    </label>
                </div>
            </div>
        </div>
    );
}
