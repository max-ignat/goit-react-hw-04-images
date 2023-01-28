import { Component } from 'react';
import PropTypes from 'prop-types';
import { OverlayDiv, ModalWrapperDiv } from './Modal.styled';

const Modal = () => {
    return (
        <OverlayDiv>
            <ModalWrapperDiv>
                <img src="" alt="" />
            </ModalWrapperDiv>
        </OverlayDiv>
    )
}

export default Modal;

Modal.propType = {
};