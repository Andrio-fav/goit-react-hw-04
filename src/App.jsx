import { useEffect, useState } from 'react';
import css from './App.module.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGalllery/ImageGalllery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from './components/ImageModal/ImageModal';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

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
        Modal.setAppElement('#imageCard');
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
        setPage(page + 1);
    };

    useEffect(() => {
        if (query === '') {
          return;
        }
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
            {isLoading && <BarLoader />}
            {images.length > 0 && (
                <ImageGallery
                onOpen={setModalImg}
                openModal={openModal}
                images={images}
                />
            )}
            {images.length > 0 && !isLoading && (
                <LoadMoreBtn onLoadMore={handleLoadMore} />
            )}
        </div>
    );
}