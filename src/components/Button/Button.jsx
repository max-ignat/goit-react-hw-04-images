// import PropTypes from 'prop-types';
import { ButtonLoad } from './Button.styled';

const Button = ({ text, onLoadMore }) => {
  return (
    <ButtonLoad type="button" onClick={onLoadMore}>
      {text}
    </ButtonLoad>
  );
};

export default Button;

Button.propType = {
};