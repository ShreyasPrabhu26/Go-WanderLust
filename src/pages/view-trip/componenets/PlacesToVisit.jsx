import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Ticket, Calendar, Clock3 } from 'lucide-react';

const PlacesToVisit = ({ itinerary }) => {
  if (!itinerary || itinerary.length === 0) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <h2 className='mb-6 text-3xl font-bold text-teal-700'>
          Places to Visit
        </h2>
        <p className='text-gray-600'>
          No itinerary available at the moment. Check back later!
        </p>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='mb-6 text-3xl font-bold text-teal-700'>Places to Visit</h2>
      {itinerary.map((day, index) => (
        <div key={index} className='mb-8'>
          <h3 className='mb-4 text-2xl font-semibold text-teal-600'>
            {day.day}
          </h3>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {day.plan &&
              day.plan.map((place, placeIndex) => (
                <PlaceCard key={placeIndex} place={place} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const PlaceCard = ({ place }) => {
  if (!place) return null;

  return (
    <Card className='group flex h-full w-full flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105'>
      <div className='relative h-48'>
        <div className='absolute inset-0 bg-gradient-to-b from-teal-400 to-teal-600 opacity-75' />
        <img
          src={
            place.placeImageUrl ||
            'https://via.placeholder.com/400x300?text=No+Image'
          }
          alt={place.placeName || 'Place'}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='flex flex-grow flex-col p-4'>
        <h4 className='mb-2 text-lg font-bold text-teal-700'>
          {place.placeName || 'Unknown Place'}
        </h4>
        <div className='mb-2 space-y-2 text-sm'>
          <div className='flex items-center gap-2'>
            <MapPin className='h-4 w-4 text-teal-600' />
            <span className='line-clamp-1'>
              {place.placeAddress || 'Address not available'}
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <Clock className='h-4 w-4 text-teal-600' />
            <span>{place.travelTime || 'Travel time not specified'}</span>
          </div>
          <div className='flex items-center gap-2'>
            <Ticket className='h-4 w-4 text-teal-600' />
            <span>{place.ticketPricing || 'Pricing not available'}</span>
          </div>
          <div className='flex items-center gap-2'>
            <Calendar className='h-4 w-4 text-teal-600' />
            <span>{place.bestTimetoVisit || 'Best time not specified'}</span>
          </div>
        </div>
        <p className='mb-4 line-clamp-3 text-sm'>
          {place.placeDetails || 'No details available'}
        </p>
        <div className='mt-auto'>
          <Button
            variant='outline'
            className='w-full border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white'
            onClick={() =>
              place.geoCoordinates &&
              window.open(
                `https://www.google.com/maps/search/?api=1&query=${place.geoCoordinates}`,
                '_blank',
              )
            }
            disabled={!place.geoCoordinates}
          >
            {place.geoCoordinates ? 'View on Map' : 'No Location Data'}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PlacesToVisit;
