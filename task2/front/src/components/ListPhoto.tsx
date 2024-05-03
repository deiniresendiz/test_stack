import { Photo } from '../helpers';

type ListPhotoProps = {
    photos: Photo[] | null
  };

export const ListPhoto: React.FC<ListPhotoProps> = ({ photos }) => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
            {
                photos?.map((photo) => (
                    <div key={photo.id} className='w-full object-cover'>
                        <img src={photo.url} alt={photo.title} />
                    </div>
                ))
            }
        </div>
    );
}