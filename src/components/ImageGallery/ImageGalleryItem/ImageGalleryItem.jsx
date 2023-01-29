// import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, openBigPic, largeImageURL , tags }) => {
  return (
    <GalleryItem>
      <GalleryItemImage
        onClick={() => openBigPic(largeImageURL)}
        src={webformatURL}
        alt={tags}
      />
    </GalleryItem>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propType = {
};