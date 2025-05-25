import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos/';
const searchParams = {
  client_id: 'LjowS0hl_BS-oVI7WsBjcmCHELFpZPuwATZ2Fc4ebHA',
  query: '',
  orientation: 'landscape',
  page: 1,
  per_page: 12,
};

export default async function fetchPhotos(query, page) {
  searchParams.query = query;
  searchParams.page = page;
  const response = await axios.get(`?${new URLSearchParams(searchParams)}`);
  return response.data.results;
}