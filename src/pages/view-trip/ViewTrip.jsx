import { useContext, useEffect, useState } from 'react';
import { TripDataContext } from '@/App';
import { useParams } from 'react-router-dom';

import { db } from '@/service/firebase';
import { doc, getDoc } from 'firebase/firestore';
import InfoSection from './componenets/InfoSection';
import LoadingSpinner from '@/components/LoadingSpinner';
import Hotels from './componenets/Hotels';
import PlacesToVisit from './componenets/PlacesToVisit';

const ViewTrip = () => {
  const { tripId } = useParams();
  const { tripData, setTripData } = useContext(TripDataContext);

  const [loading, setLoading] = useState(false);

  const getTripData = async () => {
    setLoading(true);
    const docRef = doc(db, 'AITrips', tripId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setTripData(docSnap.data());
    } else {
      console.log('Something Went Wrong!!!');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!tripData) tripId && getTripData();
  }, [tripId]);

  if (loading) {
    return <LoadingSpinner />;
  }
  if (tripData) {
    const { userSelections, tripDataFromAi } = tripData;
    const { itinerary, hotels } = tripDataFromAi;
    return (
      <>
        <div className='md:px-20 lg:px-44 xl:px-56'>
          <InfoSection userSelections={userSelections} />
          <Hotels hotels={hotels} />
          <PlacesToVisit itinerary={itinerary} />
        </div>
      </>
    );
  }
};

export default ViewTrip;
