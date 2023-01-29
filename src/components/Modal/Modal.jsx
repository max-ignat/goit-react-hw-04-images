
import PropTypes from 'prop-types';
import { Component } from 'react';
import { OverlayDiv, ModalWrapperDiv } from './Modal.styled';

export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL } = this.props;
    return (
      <OverlayDiv onClick={this.onBackdropClick}>
        <ModalWrapperDiv>
          <img src={largeImageURL} alt="" />
        </ModalWrapperDiv>
      </OverlayDiv>
    );
  }
}
