// import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ photos, openBigPic }) => {
  const elements = photos.map(({ id, webformatURL, largeImageURL }) => (
    <ImageGalleryItem key={id}
      getLargeImg={openBigPic}
      
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

ImageGallery.propType = {
};