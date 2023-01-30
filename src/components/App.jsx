import { PureComponent } from 'react';
import { AppWrapperDiv, Message } from './App.styled';
import getPhoto from '../services/API';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button';

import Modal from './Modal/Modal';

export class App extends PureComponent {
  state = {
    photos: [],
    query: '',
    loading: false,
    error: null,
    page: 1,
    totalPages: 0,
    per_page: 12,
  };
  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
   
    const { query, page, } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.fetchPhotos();
      
    }
  }

  async fetchPhotos() {
    try {
      this.setState({ loading: true });
      const { query, page, per_page } = this.state;
      const { hits, totalHits } = await getPhoto(query, page, per_page);
      this.setState(({ photos }) => ({
        photos: [...photos, ...hits],
        totalPages: totalHits / per_page,
      }))
        console.log('QUERY =>',this.state.query);
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleFormSubmit = query => {
    this.setState({ query, page: 1, photos: [] });
  };

  loadMore = e => {
    console.log('load more');
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  getLargeImg = largeImageURL => {
    this.setState({ showModal: true, largeImageURL: largeImageURL });
  };
  onCloseModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { loading, photos, showModal, largeImageURL } = this.state;
    return (
      <>
        <AppWrapperDiv>
          <Searchbar qwe={this.handleFormSubmit} />
          {loading && <Message>...Loading content</Message>}
          {/* {!photos.length && <Message >Nothing found</Message>} */}

          <ImageGallery
            photos={this.state.photos}
            getLargeImg={this.getLargeImg}
          />

          {photos.length > 0 && photos.length >= 12 && (
            <Button text="Load more" onLoadMore={this.loadMore} />
          )}
          {showModal && (
            <Modal largeImageURL={largeImageURL} onClose={this.onCloseModal} />
          )}
        </AppWrapperDiv>
      </>
    );
  }
}
