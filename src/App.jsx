import { useEffect, useState } from 'react';
import css from './App.module.css';
import { BeatLoader } from 'react-spinners';
import fetchPhotos from './searchImg';
import Modal from 'react-modal'
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from './components/ImageModal/ImageModal';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');

  function openModal(largeURL) {
    setModalImg(largeURL);
    setIsOpen(true);
    Modal.setAppElement('#root'); 
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSearch = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (query === '') return;

    async function fetchMorePhotos() {
      try {
        setIsError(false);
        setIsLoading(true);
        const newPhotos = await fetchPhotos(query, page);
        setImages((prevPhotos) => [...prevPhotos, ...newPhotos]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMorePhotos();
  }, [query, page]);

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      {isError && <ErrorMessage />}
      {isLoading && <BeatLoader color="#36d7b7" />}
      {images.length > 0 && (
        <ImageGallery openModal={openModal} images={images} />
      )}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      <ImageModal isOpen={modalIsOpen} closeModal={closeModal} url={modalImg} />
    </div>
  );
}