import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/service/firebase';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, MapPin, Calendar, Users, DollarSign } from 'lucide-react';
import fetchPlacePhoto from '@/service/getPlacePhoto';

const SkeletonLoader = () => (
  <div className='relative h-48 animate-pulse bg-gray-200'>
    <div className='h-full w-full bg-gray-300'></div>
  </div>
);

const MyTrips = () => {
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const getMyTrips = async () => {
      if (user?.email) {
        try {
          setLoading(true);
          const firebaseQuery = query(
            collection(db, 'AITrips'),
            where('userEmail', '==', user.email),
          );
          const querySnapshot = await getDocs(firebaseQuery);
          const trips = await Promise.all(
            querySnapshot.docs.map(async (doc) => {
              const tripData = doc.data();
              const photo = await fetchPlacePhoto(
                tripData?.userSelections?.destination,
              );
              return { id: doc.id, ...tripData, photo };
            }),
          );
          setUserTrips(trips);
        } catch (error) {
          console.error('Error fetching trips:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    getMyTrips();
  }, [user]);

  const handleViewTrip = (tripId) => {
    navigate(`/view-trip/${tripId}`);
  };

  if (loading) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <Loader2 className='h-8 w-8 animate-spin' />
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='mb-6 text-3xl font-bold'>My Trips</h1>
      {userTrips.length === 0 ? (
        <p className='text-center text-gray-600'>
          You haven't created any trips yet.
        </p>
      ) : (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {userTrips.map((trip) => (
            <Card key={trip.id} className='overflow-hidden'>
              <div className='relative h-48 overflow-hidden'>
                {trip.photo ? (
                  <img
                    src={trip.photo}
                    alt={trip.userSelections.destination}
                    className='h-full w-full object-cover'
                    loading='lazy'
                  />
                ) : (
                  <SkeletonLoader />
                )}
                <div className='absolute inset-0 flex items-end bg-black bg-opacity-40'>
                  <CardHeader className='z-10 text-white'>
                    <CardTitle className='text-xl'>
                      {trip.userSelections.destination}
                    </CardTitle>
                    <CardDescription className='flex items-center text-gray-200'>
                      <Calendar className='mr-1 h-4 w-4' />
                      {trip.userSelections.days} days
                    </CardDescription>
                  </CardHeader>
                </div>
              </div>
              <CardContent className='pt-4'>
                <div className='mb-4 space-y-2'>
                  <div className='flex items-center text-sm text-gray-600'>
                    <Users className='mr-2 h-4 w-4' />
                    {trip.userSelections.peopleType}
                  </div>
                  <div className='flex items-center text-sm text-gray-600'>
                    <DollarSign className='mr-2 h-4 w-4' />
                    {trip.userSelections.budget}
                  </div>
                  <div className='flex items-center text-sm text-gray-600'>
                    <MapPin className='mr-2 h-4 w-4' />
                    {trip.tripDataFromAi.hotels[0].hotelName}
                  </div>
                </div>
                <Button
                  onClick={() => handleViewTrip(trip.id)}
                  className='w-full'
                >
                  View Trip Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyTrips;
