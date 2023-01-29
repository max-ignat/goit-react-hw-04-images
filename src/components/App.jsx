import { PureComponent } from 'react';
// import Notiflix  from 'notiflix';
import { AppWrapperDiv, Message } from './App.styled';
import  getPhoto  from './API';

// import axios from 'axios';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button';

// import Loader from './Loader';
// import Modal from './Modal/Modal';

export class App extends PureComponent {
  state = {
    photos: [],
    query: '',
    loading: false,
    error: null,
    page: 1,
    // showLoadMore: false,
    perPage: 12,
  };
  componentDidMount() {
   }

  componentDidUpdate(prevProps, prevState) {
  console.log('ComponentDidUpdate');
    const { query , page  } = this.state;
    
    if (prevState.query !== query || prevState.page !== page ) {
      // this.setState({loading: true})
      // getPhoto(query, page ,)
      //   .then(({ hits }) => {
      //     this.setState(({ photos }) => ({
      //       photos: [...photos, ...hits]
      //   }));
      //   })
      //   .catch(error => console.log(error))
      //     // Notiflix.Notify.failure('Something went wrong'))
      //   .finally(() => this.setState({ loading: false}) );
      this.fetchPhotos()
    }
    
  }

  async fetchPhotos() {
  try {
    this.setState({ loading: true });
    const { query, page} = this.state;
    const {hits} = await getPhoto ( query , page)
    this.setState(({ photos }) => ({
      photos: [...photos, ...hits],
    
    }));
  
  } catch (error) {
    this.setState({error: error.message})
  } finally {
    this.setState({ loading: false });
  }
}

  handleFormSubmit = query => {
    this.setState({ query, page: 1, photos: [] });
  };

  loadMore = (e) => {
    console.log("load more");
    this.setState(({page}) => ({page: page + 1}))
}

  render() {
    const { loading, photos ,} = this.state;
    return (
      <>
        <AppWrapperDiv>
          <Searchbar qwe={this.handleFormSubmit} />
          {loading && <Message>...Loading content</Message>}
          {/* {!photos.length && <Message >Nothing found</Message>} */}

          <ImageGallery photos={this.state.photos} />
          {/* { showLoadMore && <Button text="Load more" onLoadMore={this.loadMore} />} */}
          {photos.length > 0 && (
            <Button text="Load more" onLoadMore={this.loadMore} />
          )}
        </AppWrapperDiv>
      </>
    );
  }
}
