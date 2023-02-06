import { useState, useEffect } from 'react';
import { AppWrapperDiv } from './App.styled';
import getPhoto from './services/API';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button';
import PacmanLoader from 'react-spinners/FadeLoader';
import Modal from './Modal/Modal';

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotallPages] = useState(0);
  const [per_page] = useState(12);
  // const isFirstRender = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);

  useEffect(() => {
    if (query === '') {
      return;
    }
    const fetchPhotos = async (page, query) => {
      try {
        setLoading(true);
        const { hits, totalHits } = await getPhoto(query, page, per_page);

        setPhotos(photos => [...photos, ...hits]);
        setTotallPages(totalHits / per_page);
        console.log('QUERY =>', query);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos(page, query);
  }, [query, page, per_page]);

  const handleFormSubmit = query => {
    setQuery(query);
    setPage(1);
    setPhotos([]);
  };

  const loadMore = e => {
    console.log('load more');
    setPage(page => page + 1);
  };

  const getLargeImg = largeImageURL => {
    setShowModal(true);
    setLargeImageURL(largeImageURL);
  };
  const onCloseModal = () => {
    setShowModal(false);
  };

  const override = {
    // display: 'block',
    margin: '0 auto',
    // borderColor: 'red',
  };

  return (
    <>
      <AppWrapperDiv>
        <Searchbar submitPropValue={handleFormSubmit} />
        {loading && (
          <PacmanLoader
            color={'#3f51b5'}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}

        <ImageGallery photos={photos} getLargeImg={getLargeImg} />

        {photos.length > 0 && photos.length >= 12 && (
          <Button text="Load more" onLoadMore={loadMore} />
        )}
        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={onCloseModal} />
        )}
      </AppWrapperDiv>
    </>
  );
};
