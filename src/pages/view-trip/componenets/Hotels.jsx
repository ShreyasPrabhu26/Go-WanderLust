import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Hotels = ({ hotels }) => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='mb-6 text-3xl font-bold'>Hotel Recommendations</h2>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
        {hotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

const HotelCard = ({ hotel }) => {
  return (
    <Link
      to={`https://www.google.com/maps/search/?api=1&query=${hotel?.hotelName} + ${hotel?.hotelAddress}`}
      target='_blank'
    >
      <Card
        className={`group flex w-full cursor-pointer flex-col overflow-hidden`}
      >
        <div className='relative h-48'>
          <div className='absolute inset-0 bg-gradient-to-b from-teal-400 to-teal-600 opacity-75' />
          <img
            src={hotel.hotelImageUrl}
            alt={hotel.hotelName}
            className='h-full w-full object-cover'
          />
        </div>
        <div className='flex flex-grow flex-col p-4'>
          <h3 className='mb-2 line-clamp-1 text-lg font-bold'>
            {hotel.hotelName}
          </h3>
          <div className='mb-2 space-y-1 text-sm'>
            <div className='flex items-center gap-2'>
              <span aria-hidden='true'>📍</span>
              <span className='line-clamp-1'>{hotel.hotelAddress}</span>
            </div>
            <div className='flex items-center gap-2'>
              <span aria-hidden='true'>💰</span>
              <span>{hotel.price}</span>
            </div>
            <div className='flex items-center gap-2'>
              <span aria-hidden='true'>⭐</span>
              <span>{hotel.rating}</span>
            </div>
          </div>
          <div className={`overflow-hidden'} h-16`}>
            <p className='text-sm'>{hotel.description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default Hotels;
