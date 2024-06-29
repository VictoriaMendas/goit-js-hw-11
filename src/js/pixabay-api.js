export function getPhotos(query) {
  const API_KEY = '44385883-198adbd7f849b7ff14e77c80c';
  const BASE_URL = 'https://pixabay.com/api/';
  const options = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`${BASE_URL}?${options}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  });
}
