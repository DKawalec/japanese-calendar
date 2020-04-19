import React from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

const Button = ({label, onClick}) => 
  <button className={style.button} onClick={onClick}>{label}</button>;

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
