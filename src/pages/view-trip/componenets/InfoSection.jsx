import { useEffect, useState } from 'react';
import fetchPlacePhoto from '@/service/getPlacePhoto';

const InfoSection = ({ userSelections }) => {
  const [photoUrl, setPhotoUrl] = useState(
    'https://aitrip.tubeguruji.com/placeholder.jpg',
  );

  useEffect(() => {
    const loadPlacePhoto = async () => {
      if (userSelections?.destination) {
        const photo = await fetchPlacePhoto(userSelections.destination);
        if (photo) {
          setPhotoUrl(photo);
        }
      }
    };
    loadPlacePhoto();
  }, [userSelections]);

  return (
    <div>
      <img
        src={photoUrl}
        className='h-auto w-full max-w-full rounded-lg object-cover shadow-lg'
        alt={userSelections?.destination || 'Placeholder'}
        style={{ height: 'auto', maxHeight: '40vh', objectFit: 'cover' }}
      />

      <div className='my-5 flex flex-col gap-2'>
        <h2 className='text-2xl font-bold'>{userSelections?.destination}</h2>
        <div className='flex gap-5'>
          <span className='rounded bg-slate-300 p-2 text-xl font-bold'>
            {userSelections?.days}
            {userSelections?.days > 1 ? ' Days' : ' Day'}
          </span>
          <span className='rounded bg-slate-300 p-2 text-xl font-bold'>
            {userSelections?.peopleType}
          </span>
          <span className='rounded bg-slate-300 p-2 text-xl font-bold'>
            {userSelections?.budget}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
