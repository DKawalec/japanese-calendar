import React from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';
import { ARROW_RIGHT, ARROW_LEFT } from '../../../constants/unicode-codes';

const Selector = ({value, isActive, onLeftClick, onRightClick}) => (
  <div className={`${style.selector} ${isActive ? '' : style.disabled}`}>
    { isActive && <button onClick={onLeftClick}>{ARROW_LEFT}</button> }
    {value}
    { isActive && <button onClick={onRightClick}>{ARROW_RIGHT}</button> }
  </div>
);

Selector.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isActive: PropTypes.bool,
  onLeftClick: PropTypes.func.isRequired,
  onRightClick: PropTypes.func.isRequired
};

export default Selector;
