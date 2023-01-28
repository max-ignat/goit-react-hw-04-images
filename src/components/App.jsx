import { Component } from 'react';
import { AppWrapperDiv } from './App.styled';
// import API from './API/API';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
// import Loader from './Loader/Loader';
// import Modal from './Modal/Modal';

export class App extends Component {


  render() {
    return (
      <AppWrapperDiv>
        <Searchbar></Searchbar>
        <ImageGallery/>
        <Button text="Load more"/>
      </AppWrapperDiv>
    );
  }
}

