// import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ photos, getLargeImg }) => {
  const elements = photos.map(({ id, webformatURL, largeImageURL }) => (
    <ImageGalleryItem
      getLargeImg={getLargeImg}
      key={webformatURL}
      webformatURL={webformatURL}
      largeImageURL={largeImageURL}
    />
  ));
  return <Gallery>{elements}</Gallery>;
};

export default ImageGallery;

// ImageGallery.defaultProps = {
//     photos: []
// }

