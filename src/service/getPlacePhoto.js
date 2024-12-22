import axios from 'axios';
import getOptimalPhoto from './getOptimalPhoto';

const GOOGLE_PLACE_BASE_URL = `https://places.googleapis.com/v1/places:searchText`;

const GOOGLE_PHOTO_BASE_URL = `https://places.googleapis.com/v1/{NAME}/media?maxHeightPx={HEIGHT}&maxWidthPx={WIDTH}&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`;

const fetchPlacePhoto = async (destination) => {
  try {
    const placeDetailsResponse = await axios.post(
      GOOGLE_PLACE_BASE_URL,
      { textQuery: destination },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
          'X-Goog-FieldMask': [
            'places.photos',
            'places.displayName',
            'places.id',
          ],
        },
      },
    );

    // const photoName = placeDetailsResponse.data?.places[0]?.photos[3]?.name;
    const photoDetails = getOptimalPhoto(
      placeDetailsResponse.data?.places[0]?.photos,
    );

    if (!photoDetails) throw new Error('Photo name not found');

    const HEIGHT = photoDetails?.heightPx || 1000;
    const WIDTH = photoDetails?.widthPx || 1000;

    // Fetch photo URL
    return GOOGLE_PHOTO_BASE_URL.replace('{NAME}', photoDetails.name)
      .replace('{HEIGHT}', HEIGHT)
      .replace('{WIDTH}', WIDTH);
  } catch (error) {
    console.error('Error fetching place photo:', error);
    return null;
  }
};

export default fetchPlacePhoto;