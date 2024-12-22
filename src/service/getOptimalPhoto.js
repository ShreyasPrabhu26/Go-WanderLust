const getOptimalPhoto = (photosNamesFromGoogleApi) => {
  const connectionType = navigator.connection?.effectiveType || '4g';
  const devicePixelRatio = window.devicePixelRatio || 1;
  const screenWidth = window.innerWidth;

  const sortedPhotos = photosNamesFromGoogleApi.sort(
    (a, b) => a.widthPx - b.widthPx,
  );

  let targetWidth = screenWidth * devicePixelRatio;

  if (connectionType === '2g' || connectionType === 'slow-2g') {
    targetWidth = Math.min(targetWidth, 800);
  } else if (connectionType === '3g') {
    targetWidth = Math.min(targetWidth, 1200);
  }

  return (
    sortedPhotos.find((photo) => photo.widthPx >= targetWidth) ||
    sortedPhotos[0]
  );
};

export default getOptimalPhoto;